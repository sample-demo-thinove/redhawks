import './style.css'

// 1. DATA
const players = [
    { name: 'Blade', role: 'Rusher', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj74bsPWmazgKibGCDptrOfy1WZtRsEhAbIGoFMiknVyTkl4eOiMnPFgZ00ovsIaVVEAXJwbIlPa8ZZXSqKS3ZCdb4xpxGwM5f91Q1WfHboZR4xkqYa4c85ZoOk_lIsKS6jya5OPVyT7lnCRSw69cdqjZwaNIk__wIvUopW5VljDvPNJPqRn9Y9isYWXN-b', fb: 'https://www.facebook.com/profile.php?id=100084440170962', yt: 'https://www.youtube.com/@Blade_On_Top', tiktok: '#' },
    { name: 'Kafi', role: 'Support', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEijU7WyzHffdVt1YDR9rXRWXrPM0fTHW1JFjMNl1GWIi-Q73Hvj2mkW1DzpGm4_ydLvrkTzRHBosnC3xLhs6hePqXzxhOK_G5pC4hOJF8D2Gv1cSN9ANZNWM-qVxNPsnK-gtfgvluYbKiUTv5oMZ7xJFhF8QioCt-OmbMRXXjE9viwdKxzbpQqdNPdZzxMV', fb: 'https://www.facebook.com/kaafi.kashfi/', yt: 'https://www.youtube.com/@comfeeOfficial', tiktok: 'https://www.tiktok.com/@playlikecomfee' },
    { name: 'Nejad', role: 'Bomber', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiSKZ1vU_MnKAPXjZRjPb7u_TEpa8QMrQ11fhewu379EeRh8jKKWzkiH7U08asDtBviSx2XWqiwvUPjBkwbXHnBdbGAkxe48PkR1s8u1CPG-PtTqaZiu2GErgjsA7m9TBvbzRGIIswAWfTluWxcAuBhiXYFML1kTKYZYnkZVqxxpa7YF5J_1bKb3EhancjX', fb: 'https://www.facebook.com/NEJAD69/', yt: 'https://www.youtube.com/@NejadSix9ine', tiktok: 'https://www.tiktok.com/@nejad_sixninex' },
    { name: 'Kuttush', role: 'Sniper', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjSLU0Ed_oP2ZVn3PdJXSJ1MyV36cak6F56ZolNm-0W7zYEo4mzWOORiJTbYTy9j7O0D4olFj_W0tj1fWZrp5amcPY_nAngOR9_XLKj-5cWS5rrBgJkM_VxTxhecVZOIjYd7eKu7vE-QrUogthUz2WmuHCiB7zOS0nyu6sFPWjjownmbKg3towSnqJuWxr0', fb: 'https://www.facebook.com/tahsin.hasan.rudro/', yt: 'https://www.youtube.com/@KUTTUSH-u5r', tiktok: 'https://www.tiktok.com/@kuttush83' },
    { name: 'Rahat', role: 'Assaulter', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjHb54FRHRXIW6bd20lhtID0z7FaMLon60XO1FziPYQmqsuvGWxkVz5NEhKuwNPiqG51BO3PlVf7IaT0ZtsvO5jaOuzJhC1tQEdu01dCeRlw3wxGk4Qh_pdhZjzpjmNKu4WYJ8uWbZ8Kgh7LyyfBLEwnWZpSiOmZgd2PnbJSom4vKIx3MGiQaZMNYZPAwOf', fb: 'https://www.facebook.com/rahat.rahman.5891004/', yt: 'https://www.youtube.com/@RahatFF-m8h', tiktok: 'https://www.tiktok.com/@rhk_rahat' },
];

const achievements = [
    { date: '2026-02-13', title: 'Free Fire Bangladesh Pro League Season 1', position: 'Champions', logo: 'https://blogger.googleusercontent.com/img/a/AVvXsEhTHElU185zZqL2Q7T7VJHcOFIJDD3Wn5i4DiGXDyBHNJpzrbR-VRz81UWs-IJqXDWaflr019u8-poIYmBSPXDi7qwtCILw14raUK-2alWetVZiRuFOR96BTq-0QX-UQZJop6wxk8a4zofR-K-fSj8wh1B4KklCPLSJNMVs60DF86R4YsBF51xJ6ca0UDSD' },
    { date: '2025-10-04', title: 'Free Fire World Series - Bangladesh 2025', position: 'Champions', logo: 'https://blogger.googleusercontent.com/img/a/AVvXsEjTB2iklqNodRuZ_G1lwz-wEHW54tlP_TevFD9c9dgokFotjftxoignWH0QUpt1PVxZHyWVLqkYnD7rbMSjih1H-5gOt7seayK1309FAhJ3_dhpL4WDT4Z-MYF8ibTfp-QDYTgbZI5sy6g82-N9OsXfQPnOQ6ZPrRPQnIZG7intDEQOyJtnPzyZAH1OxJxd' },
    { date: '2025-08-21', title: 'Lidoma Endless Series 2025 - South Asia Regional Championship', position: 'Champions', logo: 'https://blogger.googleusercontent.com/img/a/AVvXsEgV90oSnPeRCdBNu6cgY1oNPmlcg1d8Ql9Huh6LZYsdl3Yp88dgC6OAwl90yd_uBF4n6F2LZ8InZr1Fn5Ol_Gh-65DcjohEVYp3TVU6yxssCJwszKChRVSrw1dCewDPqeg15Mqc0Pu8ntHvBFspUVoQHHH8RRIOnQDHtie7Y7e8xwfqx_XFOUcLArqNxQKg' },
    { date: '2025-06-20', title: 'Free Fire Bangladesh Championship 2025', position: 'Champions', logo: 'https://blogger.googleusercontent.com/img/a/AVvXsEigKmcJW2cQnXEPTqschIPt_ocvPRNRXT5B2X4psK-yYdZLCF9PE1yT-36FrWPpQ2gjB-aTx46Z2_1SRILdyiV94ROyDiwptH_6WZJufXc_rXCMeMaaSegqcC48QoZGA_Q731Uptnxt-543sSeHssYJ1a21J_fYBW8D0KwKKLUQHnpKR-MyMcO6Y_Yykx3Z' },
];

const teamSocials = [
    { name: 'Instagram', iconClass: 'fa-brands fa-instagram', url: '#', hoverColor: 'hover:text-pink-500' },
    { name: 'Facebook', iconClass: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=100063557961700', hoverColor: 'hover:text-blue-500' },
    { name: 'X', iconClass: 'fa-brands fa-x-twitter', url: '#', hoverColor: 'hover:text-white' },
    { name: 'TikTok', iconClass: 'fa-brands fa-tiktok', url: 'https://www.tiktok.com/@redhawksofficials', hoverColor: 'hover:text-white' },
    { name: 'YouTube', iconClass: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@redhawksofficials', hoverColor: 'hover:text-red-500' },
    { name: 'Discord', iconClass: 'fa-brands fa-discord', url: 'https://discord.gg/redhawksofficials', hoverColor: 'hover:text-indigo-400' },
];

const communityTeam = [
    { name: 'RENOX', role: 'Admin', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhVvqp6r4COyfG-48iMW_fSCOAKHgHR3cDPrdO3DKAejxbl6-NJJoDwAcdBO949zOuQhJIMAtaFxjx-6A66Tls3l1uTMYHAV_iPS6YuTlZLT7HBEV7peOtsR_a3I5cL_eDrYXjslfGaKqu3i86Hop8CyWf3aGedBA3IfeG_RAgh3rqJB0-AY85N9Asj5K-R' },
    { name: 'SP4RK M4 !!', role: 'Admin', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjKFXt8-gqueg08Lrj0i5ozhrmkelkfDIM067GZky-HRrawaOgaO12V4if3HwNA34ys4NkqQjeZ3Ie4Ob3p-ypuFYILW2-BMABMA4vWdq4TDUTYvPK47QfAskr3F6aMSQ73E7SXCKXTurSoRRQWltxJCqLAAFsSsxIAkN8LSwDuPpLBSP8LYFt-nuxYWIl8' },
    { name: 'Apex FF YT', role: 'Senior Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj15fKiuLGQ56LscqoqCLHB5PgdItUubKnvu6yU-6cbL_sVejBGVB9k7rGhDv0GHMGTt-8QyXS64nBJXaMKOveJ9gMGUyt1XXXTwmOEjMS-LUd2kSn71i9qaPNtB7MhWbLOM5NHsn-A-jVxVRnUhYweyRle9s5lvFBkxoNmwMuRUVKdR8Zd6tGzsk2jUyBt' },
    { name: 'Sumon Ahmed', role: 'Senior Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgYLYk7UJ78SR3pgnFdlV_N46Qawrllkpv52IW97NyhOVO4e5fGDPu6dYoIokfzAfYCU1lwul0RKO0Jm7obC_5jbkKGS_G6rRPeLnuGm0G3tvFT2Ya73l2ACaNtSpJiOwjvDtjmMoZkc5sGuOa7Tf9ho6ugfXfOvTo9BkwS4itiv4tMhSLMKz5PYpR7N-Zn' },
    { name: 'Nexus', role: 'Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiAe7AMV2i8kVV6Rmy2uybH6I7ow5-Ww2ayHI1B7hUMLCqRC1DE3_XgiTDkufErqM-KlnKUPfEBe8VmnJfAOzwm3tuWEfvBLBVWHcKOtMvYl3ffJ_frQxX-7B7DkAsI9CY6Hy8j1FFk09h9WJ2p_W9Qpa3Ndd1xMHgk1J79qDZus2fj-bxaFG-d8sOBlrKR' },
    { name: '! SAHAM HERE', role: 'Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjmvvRRKgStMNx_at8NruMQB71pUVYe3o2CyZu8BQmoBQtV4L9oe1C1B2b_CdgQRKq44XLwVruIf8xWVdZO8KyfMDPp1nQ0cWsEIUbfcdvmzqCWwMf5ZE_Q22Yu9v1lSWrtlMG3zgbRtoAISAeSDnIi5bskVdHBIm_MYqZil0bqZmGZ4KXrUU_IQpkedtnI' },
    { name: 'OXYLOT', role: 'Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgNbVbbVnedMbo6dPazkbOjQ9oBixuon8ixwGPqU-YZi8tiRhfzCE99QlyK1UMVrh5bDpGt0ee4OBUWAxyS65CGrSU7eixXwtf4uQnYl1IbIbu1KQ5lfE0eRh455mkg1PPWAhytTP81i3WuqIzZ95mKa2DZaVHDS3gzfR-qxuOhwoI-96DqHlGLN3Gck12_' },
    { name: 'Arman Nazrul', role: 'Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhcFT3DERrnsOsrCyjg-Ujq73nkmZJC93uKIIGKIf5EYtvwMLhJ-nsLgdcsmpsaeLpgtQ-o6JYvZa4_NoTl9pSKZy7Zo-H89hHyelEP8M6Ezez02J3mTekJWZ01JX8mzpZGxCMWbkPaBy9PV60g6dUFQcKeAvQ3BziVDKKZ-QXcqc84se6c7OKgBUGbZYzA' },
    { name: 'Mr Tanvin 1.0', role: 'Moderator', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjjqnhWh1calfLGk_0uTIsDKiehisDeHkx6MM72JzrCP_rKVo4DJCQcN1GcFXpgLbJ3jANNYC72GQ0YtXzB9tHB4E8PSYql9sDK2y6sSmk9yOarmxlzsUu0w2BPCcgbAX7fuMZeSHolBAQH3kaL3R1iGbnVQVmGqISiJOqqcQftK5ou6VRbVqrU1Crztd8c' },
];

const leadership = [
    { name: 'Rahat Ahmed Rifat', role: 'Founder', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhHWeG8Y-f8UJ8gDajt56zCnLkvOMbEqvK37gn_FWlRYmiG2VzP7BlX1GZReS0GRRkZFHDG5oZjGgSWJ-XxW_iCgc_JOHq_jFzXhEO2GBLA3OE2aqAknOwWTQrHvYN2nQOw8r0pdhST1kPfLc5RXH9yuW2o1q0HQsmomPJQX784FOyHRFtYuG8UOz4p879p', fb: 'https://www.facebook.com/rifatnyc/' },
    { name: 'Shahriar Arefin Shishier', role: 'Team Manager', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgsTqRf48HnUcsPnKptvk_Wk_JjXoG1oeScmr-HlywbN_ukWVV5TOrr3_utRCShsjXLP1K6XF6EmMwZrxFfgX-FlwO-8PLc6bT9Gb4zliQSo-94pmx9KxcEIYNgVvUWEAGQgj-2h2hEMKEhRtI6G9yXhVah07PFPaB1Xfn9IbmncpYcYvXBzTp-q8L-lo11', fb: 'https://www.facebook.com/shahriararefin.shishier' }
];

// 2. RENDERING FUNCTIONS
function renderRoster() {
    const container = document.getElementById('roster-container');
    if (!container) return;
    container.innerHTML = players.map(player => `
        <div class="group bg-zinc-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
            <div class="h-72 w-full relative overflow-hidden bg-black/20 flex justify-center items-end">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img src="${player.image}" alt="${player.name}" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                <div class="absolute top-3 left-3 bg-red-600/80 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded uppercase z-20 shadow-md">${player.role}</div>
            </div>
            <div class="p-5 text-center relative z-20 bg-black/50 backdrop-blur-md border-t border-white/5">
                <h3 class="text-xl font-bold uppercase tracking-wider mb-3 text-white text-glow">${player.name}</h3>
                <div class="flex justify-center gap-4">
                    <a href="${player.fb}" target="_blank" class="bg-white/10 p-2 rounded-full border border-white/10 text-gray-100 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all shadow-lg"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="${player.yt}" target="_blank" class="bg-white/10 p-2 rounded-full border border-white/10 text-gray-100 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-lg"><i class="fa-brands fa-youtube"></i></a>
                    <a href="${player.tiktok}" target="_blank" class="bg-white/10 p-2 rounded-full border border-white/10 text-gray-100 hover:text-white hover:bg-zinc-700 hover:border-zinc-500 transition-all shadow-lg"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLeadership() {
    const container = document.getElementById('leadership-container');
    if (!container) return;
    container.innerHTML = leadership.map(member => `
        <div class="w-full md:w-1/3 bg-zinc-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col items-center p-8 relative group shadow-2xl">
            <div class="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-red-600 mb-6 relative z-10 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-2xl font-bold uppercase tracking-wider z-10 text-center text-glow">${member.name}</h3>
            <p class="text-red-500 font-bold mb-4 uppercase text-sm tracking-widest z-10">${member.role}</p>
            <div class="flex justify-center gap-4 z-10">
                <a href="${member.fb}" target="_blank" class="bg-white/10 backdrop-blur-md p-3 rounded-full text-gray-100 hover:text-white hover:bg-blue-600 transition-all border border-white/5"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;
    container.innerHTML = achievements.map((item, idx) => `
        <div class="relative flex flex-col md:flex-row items-center justify-between group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <div class="absolute left-[16px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-black/80 backdrop-blur-md border-4 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div class="w-full md:w-5/12 pl-[50px] md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-left">
                <div class="bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 group-hover:border-red-600/60 transition-all duration-300 transform group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="flex items-center gap-4 relative z-10">
                        <div class="w-16 h-16 shrink-0 bg-black/60 backdrop-blur-sm rounded-xl p-2 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-red-600/50 transition-colors">
                            <img src="${item.logo}" alt="Logo" class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-wrap items-center gap-2 mb-2">
                                <span class="inline-block bg-red-600/20 backdrop-blur-sm text-red-400 font-mono text-xs px-2 py-1 rounded border border-red-600/30 font-bold tracking-widest">${item.date}</span>
                                <span class="inline-block bg-yellow-500/20 backdrop-blur-sm text-yellow-500 border border-yellow-500/30 font-bold text-xs px-2 py-1 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(234,179,8,0.2)]">${item.position}</span>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-gray-100 leading-tight text-glow">${item.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSocials() {
    const container = document.getElementById('socials-container');
    if (!container) return;
    container.innerHTML = teamSocials.map(social => `
        <a href="${social.url || '#'}" target="_blank" class="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 transition-all ${social.hoverColor} group hover:bg-zinc-800/80 hover:border-zinc-400 hover:-translate-y-1 shadow-2xl">
            <div class="transition-transform group-hover:scale-110 text-xl">
                <i class="${social.iconClass}"></i>
            </div>
            <span class="font-bold tracking-wider uppercase text-sm text-glow">${social.name}</span>
        </a>
    `).join('');
}

function renderHeaderSocials() {
    const container = document.getElementById('header-socials');
    if (!container) return;
    container.innerHTML = teamSocials.map(social => `
        <a href="${social.url || '#'}" target="_blank" class="hover:text-white transition-colors" title="${social.name}">
            <i class="${social.iconClass}"></i>
        </a>
    `).join('');
}

function renderCommunity() {
    const container = document.getElementById('community-container');
    if (!container) return;
    const repeatedCommunity = [...communityTeam, ...communityTeam, ...communityTeam, ...communityTeam];
    container.innerHTML = repeatedCommunity.map(member => `
        <div class="flex flex-col items-center bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all w-48 text-center shrink-0 cursor-pointer shadow-2xl hover:-translate-y-2 hover:shadow-red-900/20">
            <div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-red-500 transition-colors shadow-inner">
                <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover" />
            </div>
            <h4 class="font-bold text-lg tracking-wide text-white text-glow">${member.name}</h4>
            <p class="text-xs text-red-400 font-bold uppercase mt-1 tracking-widest text-glow">${member.role}</p>
        </div>
    `).join('');
}

// 3. FETCH MATCHES & TICKER LOOP
let currentMatchIndex = 0;
let tournamentsData: any[] = [];
let matchesData: any[] = [];

async function fetchData() {
    const tickerContainer = document.getElementById('ticker-content');
    const matchesGrid = document.getElementById('matches-grid');
    if (!tickerContainer || !matchesGrid) return;

    try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Data not found');
        const data = await response.json();

        tournamentsData = data.tournaments || [];
        matchesData = data.matches || [];

        if (tournamentsData.length > 0) {
            startTickerLoop();
        } else {
            tickerContainer.innerHTML = '<span class="font-bold text-xl uppercase tracking-tighter">No upcoming tournaments</span>';
        }

        if (matchesData.length > 0) {
            renderMatchesGrid();
        } else {
            matchesGrid.innerHTML = '<p class="text-white/40 italic">No upcoming matches scheduled.</p>';
        }

    } catch (err) {
        console.error('Failed to fetch data:', err);
        tickerContainer.innerHTML = '<span class="font-bold text-xl uppercase tracking-tighter">Stay tuned for updates</span>';
    }
}

function startTickerLoop() {
    const container = document.getElementById('ticker-content');
    if (!container || tournamentsData.length === 0) return;

    function updateTicker() {
        const item = tournamentsData[currentMatchIndex];
        container!.innerHTML = `
            <div class="animate-fade-in-out w-full flex items-center gap-6">
                <div class="w-16 h-16 bg-black/5 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-inner">
                    <img src="${item.logo || 'https://blogger.googleusercontent.com/img/a/AVvXsEguBtmKtePT3d23QKV0rJyTBdAF-SVgqh6hSuNJy0Tiz6UHiK6ai6Chw63cXHjdEMcu08lnNeRL8iTgJ2d6CcybgWmRQZ8boXU6W0D0rt_jc6GEks2zkPu-d6z7UbZPzYDxImQ2tVNxWkHh8P-tWbn_seXmdRmtE60eqgkTOJV7IM0Y7eiTp5lttx4tXMVE'}" class="w-10 h-10 object-contain drop-shadow-sm" />
                </div>
                <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 overflow-hidden">
                    <div class="flex flex-col">
                        <span class="font-black text-2xl uppercase tracking-tighter text-black">${item.tournament || 'Red Hawks Match'}</span>
                        <div class="flex items-center gap-2">
                             <span class="text-[10px] font-black bg-red-600 text-white px-2 py-0.5 rounded uppercase tracking-widest">Upcoming</span>
                             <span class="text-[10px] font-black bg-black/10 text-black/60 px-2 py-0.5 rounded uppercase tracking-widest">Official Event</span>
                        </div>
                    </div>
                    <span class="hidden md:block text-black/10 text-4xl font-light">/</span>
                    <div class="flex flex-col">
                        <span class="text-[10px] font-bold text-black/40 uppercase tracking-widest">Schedule</span>
                        <span class="font-black text-xl uppercase tracking-tighter text-red-600">${item.date || 'TBD'}</span>
                    </div>
                </div>
            </div>
        `;
        currentMatchIndex = (currentMatchIndex + 1) % tournamentsData.length;
    }

    updateTicker();
    setInterval(updateTicker, 5000);
}

function renderMatchesGrid() {
    const grid = document.getElementById('matches-grid');
    if (!grid) return;

    grid.innerHTML = matchesData.map(match => `
        <div class="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-5 rounded-xl hover:border-red-600/30 transition-all group">
            <div class="flex justify-between items-start mb-4">
                <div class="bg-white/5 px-3 py-1 rounded text-[10px] font-black text-white/60 uppercase tracking-widest border border-white/5">
                    ${match.time}
                </div>
                <div class="text-white/20 group-hover:text-red-600 transition-colors">
                    <i class="fa-brands fa-youtube text-lg"></i>
                </div>
            </div>
            <h3 class="text-xs font-black text-red-500 uppercase tracking-tighter mb-1 truncate">${match.tournament}</h3>
            <p class="text-sm font-bold text-white mb-3 tracking-tight">${match.matchTitle}</p>
            <div class="pt-3 border-t border-white/5 flex items-center justify-between">
                <span class="text-[10px] text-white/40 uppercase font-black tracking-widest">${match.map}</span>
                <div class="flex gap-1">
                    <span class="w-1 h-1 rounded-full bg-red-600"></span>
                    <span class="w-1 h-1 rounded-full bg-red-600/40"></span>
                    <span class="w-1 h-1 rounded-full bg-red-600/20"></span>
                </div>
            </div>
        </div>
    `).join('');
}

// 4. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderRoster();
    renderLeadership();
    renderAchievements();
    renderSocials();
    renderHeaderSocials();
    renderCommunity();
    fetchData();

    // Mobile Menu Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const heads = document.getElementById('heads');
    const icon = btn?.querySelector('i');

    if (btn && menu && icon && heads) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
            heads.classList.toggle('backsss');
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
                heads.classList.remove('backsss');
            });
        });
    }

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav?.classList.add('bg-black/90', 'py-4');
            nav?.classList.remove('bg-black/10', 'py-6');
        } else {
            nav?.classList.remove('bg-black/90', 'py-4');
            nav?.classList.add('bg-black/10', 'py-6');
        }
    });
});

