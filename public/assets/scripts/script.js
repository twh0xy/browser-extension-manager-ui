document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('extensions-list');
    const changeThemeBtn = document.querySelector('.change-theme');
    const body = document.body;
    const genCH = document.querySelector('.gen-c-h');
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>`;
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>`;
    
    let darkMode = false;

    try {
        const response = await fetch('./public/assets/content/extension_data.json');
        const data = await response.json();

        changeThemeBtn.addEventListener('click', () => {
            darkMode = !darkMode;
            if (darkMode) {
                gsap.to(body, { backgroundColor: "#060B1F", duration: 0.5 });
                gsap.to(genCH, { backgroundColor: "#2e3442", duration: 0.5 });
                changeThemeBtn.innerHTML = sunIcon;
                body.classList.add('dark-mode');
            } else {
                gsap.to(body, { backgroundColor: "hsl(206, 73%, 96%)", duration: 0.5 });
                gsap.to(genCH, { backgroundColor: "#FCFDFF", duration: 0.5 });
                changeThemeBtn.innerHTML = moonIcon;
                body.classList.remove('dark-mode');
            }
        });

        const cardSvgs = [
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-zoom-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .095a1 1 0 0 0 .083 1.32l1.292 1.292l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12h6" /><path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" /><path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-speedtest"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.636 19.364a9 9 0 1 1 12.728 0" /><path d="M16 9l-4 4" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-databricks"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-wide"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12h-7l3 -3" /><path d="M6 15l-3 -3" /><path d="M14 12h7l-3 -3" /><path d="M18 15l3 -3" /><path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" /><path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-layout-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-1a3 3 0 0 1 3 -3z" /><path d="M8 12a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3z" /><path d="M18 3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3z" /><path d="M18 14a3 3 0 0 1 3 3v1a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-1a3 3 0 0 1 3 -3z" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-script"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 20h-11a3 3 0 0 1 0 -6h11a3 3 0 0 0 0 6h1a3 3 0 0 0 3 -3v-11a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-terminal-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l3 3l-3 3" /><path d="M13 15l3 0" /><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`
        ];

        data.extensions.forEach((ext, idx) => {
            const card = document.createElement('div');
            card.className = 'gen-c-ext';

            card.innerHTML = `
                <div class="gen-c-h-ext">
                    <span class="gen-ci-ext" style="background-color: ${ext.icon_color};">
                        ${cardSvgs[idx] || ''}
                    </span>
                    <div class="gen-cc-ext">
                        <h3>${ext.name}</h3>
                        <p>${ext.summary}</p>
                    </div>
                </div>
                <div class="gen-c-opt-ext">
                    <button class="gen-rm-ext">Remove</button>
                    <label class="gen-toggle-switch">
                        <input type="checkbox" class="gen-tgg-ext"/>
                        <span class="gen-slider"></span>
                    </label>
                </div>
            `;

            card.querySelector('.gen-tgg-ext').addEventListener('change', function() {
                if (this.checked) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            card.querySelector('.gen-rm-ext').addEventListener('click', function() {
                // Animação GSAP antes de remover
                gsap.to(card, {
                    duration: 0.4,
                    opacity: 0,
                    y: 40,
                    ease: "power2.in",
                    onComplete: () => {
                        card.remove();
                    }
                });
            });

            container.appendChild(card);
        });

        const filterButtons = document.querySelectorAll('.gen-tao-bt');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Troca a classe active do botão
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const cards = container.querySelectorAll('.gen-c-ext');
                if (this.textContent === 'All') {
                    cards.forEach(card => {
                        gsap.to(card, { duration: 0.3, opacity: 1, y: 0, pointerEvents: 'auto', display: 'flex' });
                    });
                } else if (this.textContent === 'Active') {
                    cards.forEach(card => {
                        if (card.classList.contains('active')) {
                            gsap.to(card, { duration: 0.3, opacity: 1, y: 0, pointerEvents: 'auto', display: 'flex' });
                        } else {
                            gsap.to(card, { duration: 0.3, opacity: 0, y: 40, pointerEvents: 'none', display: 'none' });
                        }
                    });
                } else if (this.textContent === 'Inactive') {
                    cards.forEach(card => {
                        if (!card.classList.contains('active')) {
                            gsap.to(card, { duration: 0.3, opacity: 1, y: 0, pointerEvents: 'auto', display: 'flex' });
                        } else {
                            gsap.to(card, { duration: 0.3, opacity: 0, y: 40, pointerEvents: 'none', display: 'none' });
                        }
                    });
                }
            });
        });
    } catch (err) {
        container.innerHTML = '<p>Erro ao carregar extensões.</p>';
        console.error(err);
    }
});