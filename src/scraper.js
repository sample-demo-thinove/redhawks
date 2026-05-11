import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function scrapeLiquipedia() {
    console.log('Starting Liquipedia Scraper...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto('https://liquipedia.net/freefire/Titan_Esports_Club', { waitUntil: 'domcontentloaded', timeout: 60000 });

        console.log('Page loaded. Searching for data...');

        const data = await page.evaluate(() => {
            const results = {
                tournaments: [],
                matches: []
            };

            // 1. Extract Upcoming Tournaments (Ticker)
            const infobox = document.querySelector('.fo-nttax-infobox');
            if (infobox) {
                const items = Array.from(infobox.querySelectorAll('.infobox-cell'));
                items.forEach(item => {
                    const nameEl = item.querySelector('.infobox-cell-center a');
                    const logoEl = item.querySelector('.infobox-cell-left img');
                    const dateEl = item.querySelector('.infobox-cell-right');
                    if (nameEl) {
                        results.tournaments.push({
                            tournament: nameEl.innerText.trim(),
                            logo: logoEl ? logoEl.src : '',
                            date: dateEl ? dateEl.innerText.trim() : '',
                            link: nameEl.href
                        });
                    }
                });
            }

            // 2. Extract Upcoming Matches (Cards)
            // The subagent found cards in .infobox-cell-2
            const matchContainer = document.querySelector('.infobox-cell-2');
            if (matchContainer) {
                const matchCards = Array.from(matchContainer.querySelectorAll('div[style*="inline-block"]'));
                matchCards.forEach(card => {
                    const text = card.innerText.trim();
                    if (text.length > 20) {
                        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
                        results.matches.push({
                            time: lines[0] || 'TBD',
                            tournament: lines[1] || 'Tournament',
                            matchTitle: lines[2] || '',
                            map: lines[3] || '',
                            raw: text
                        });
                    }
                });
            }

            return results;
        });

        console.log(`Found ${data.tournaments.length} tournaments and ${data.matches.length} matches.`);

        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

        fs.writeFileSync(path.join(publicDir, 'data.json'), JSON.stringify(data, null, 2));
        console.log('Data saved to public/data.json');

    } catch (error) {
        console.error('Scraping failed:', error);
    } finally {
        await browser.close();
    }
}

scrapeLiquipedia();
