// ani 2 ảnh
window.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.gt_img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3
    });

    imgs.forEach(img => observer.observe(img));
});




// 3 ảnh
window.addEventListener('scroll', () => {
    document.querySelectorAll('.img_small').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // el.classList.add('album_hihi');
            el.classList.remove('js_left');
            el.classList.remove('js_right');
        }
    });
});

window.addEventListener('scroll', () => {
    const el = document.querySelector('.img_big');
    if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.remove('js_center');
        }
    }
});

// lời mời




// cf nha
document.addEventListener('DOMContentLoaded', () => {
    const cfContainer = document.querySelector('.cf_container');

    if (cfContainer) {
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.3
        });

        observer2.observe(cfContainer);
    }
});




// ani album
window.addEventListener('scroll', () => {
    document.querySelectorAll('.js_album').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // el.classList.add('album_hihi');
            el.classList.remove('album_left');
            el.classList.remove('album_right');
        }
        // else
        // {
        //     el.classList.add('album_left');
        //     el.classList.add('album_right');
        // }
    });
});

// thank
document.addEventListener('DOMContentLoaded', () => {
    const thankDesc = document.querySelector('.thank_desc');

    if (thankDesc) {
        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        observer3.observe(thankDesc);
    }
});


// Re-developed Music Toggle Controller
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const musicBtn = document.getElementById('musicControlBtn');

    if (!audio || !musicBtn) return;

    function updateBtnState() {
        if (audio.paused) {
            musicBtn.classList.remove('playing');
            musicBtn.classList.add('paused');
        } else {
            musicBtn.classList.remove('paused');
            musicBtn.classList.add('playing');
        }
    }

    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
            audio.play().then(() => {
                updateBtnState();
            }).catch(err => {
                console.warn('Audio play error:', err);
            });
        } else {
            audio.pause();
            updateBtnState();
        }
    });

    audio.addEventListener('play', updateBtnState);
    audio.addEventListener('pause', updateBtnState);

    // Try play music on first user interaction if allowed
    const autoPlayOnInteraction = () => {
        if (audio.paused) {
            audio.play().then(() => {
                updateBtnState();
                removeListeners();
            }).catch(() => { });
        }
    };

    const removeListeners = () => {
        ['click', 'touchstart'].forEach(evt => {
            window.removeEventListener(evt, autoPlayOnInteraction);
        });
    };

    ['click', 'touchstart'].forEach(evt => {
        window.addEventListener(evt, autoPlayOnInteraction);
    });

    updateBtnState();
});


// Envelope open & personalized URL parameter handling
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('to');
    const envelopeGuestNameEl = document.getElementById('envelopeGuestName');
    const cardCoverGuestNameEl = document.getElementById('cardCoverGuestName');
    const cardPartyGuestNameEl = document.getElementById('cardPartyGuestName');

    const guestText = (guestParam && guestParam.trim() !== '') ? decodeURIComponent(guestParam) : 'Quý khách';

    if (envelopeGuestNameEl) envelopeGuestNameEl.textContent = guestText;
    if (cardCoverGuestNameEl) cardCoverGuestNameEl.textContent = guestText;
    if (cardPartyGuestNameEl) cardPartyGuestNameEl.textContent = guestText;

    const envelopeOverlay = document.getElementById('envelopeOverlay');
    const btnOpenEnvelope = document.getElementById('btnOpenEnvelope');
    const envelopeActionWrapper = document.querySelector('.envelope_action_wrapper');
    const audio = document.getElementById('myAudio');

    function openEnvelope() {
        if (envelopeOverlay && !envelopeOverlay.classList.contains('opened')) {
            envelopeOverlay.classList.add('opened');
            setTimeout(() => {
                envelopeOverlay.style.display = 'none';
            }, 900);
            if (audio) {
                audio.play().catch(e => console.log('Audio autoplay prevented:', e));
            }
        }
    }

    if (btnOpenEnvelope) {
        btnOpenEnvelope.addEventListener('click', openEnvelope);
    }
    if (envelopeActionWrapper) {
        envelopeActionWrapper.addEventListener('click', openEnvelope);
    }
});

// Countdown Timer logic
document.addEventListener('DOMContentLoaded', () => {
    const isNhatrai = document.body.getAttribute('data-side') === 'nhatrai' || 
                      window.location.pathname.includes('nhatrai') || 
                      new URLSearchParams(window.location.search).get('side') === 'nhatrai' ||
                      new URLSearchParams(window.location.search).has('nhatrai');

    // Nhà Trai: 19.09.2026 17:00 | Nhà Gái: 13.09.2026 11:00
    const targetDateStr = isNhatrai ? '2026-09-19T17:00:00+07:00' : '2026-09-13T11:00:00+07:00';
    const weddingDate = new Date(targetDateStr).getTime();

    const daysEl = document.getElementById('cdDays');
    const hoursEl = document.getElementById('cdHours');
    const minsEl = document.getElementById('cdMins');
    const secsEl = document.getElementById('cdSecs');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minsEl) minsEl.textContent = '00';
            if (secsEl) secsEl.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        if (minsEl) minsEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (secsEl) secsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});



// Floating Petals Canvas Particle System
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('petalsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const petals = [];
    const numPetals = 35;
    const petalColors = ['rgba(215, 175, 135, 0.45)', 'rgba(235, 205, 180, 0.4)', 'rgba(240, 218, 195, 0.35)', 'rgba(195, 155, 125, 0.4)'];

    class Petal {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.size = Math.random() * 8 + 6;
            this.speedY = Math.random() * 1.2 + 0.6;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 2 - 1;
            this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            this.opacity = Math.random() * 0.6 + 0.3;
        }
        update() {
            this.y += this.speedY;
            this.x += Math.sin(this.y / 30) * 0.5 + this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > height + 20) {
                this.reset();
                this.y = -20;
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < numPetals; i++) {
        petals.push(new Petal());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        petals.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
});

// Scroll Reveal Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal_element');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

// Photo Gallery Lightbox Viewer
document.addEventListener('DOMContentLoaded', () => {
    const albumImgs = document.querySelectorAll('.album_container img');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const btnClose = document.getElementById('btnLightboxClose');
    const btnPrev = document.getElementById('btnLightboxPrev');
    const btnNext = document.getElementById('btnLightboxNext');

    if (!lightbox || albumImgs.length === 0) return;

    let currentIndex = 0;
    const imgSources = Array.from(albumImgs).map(img => img.src);

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = imgSources[currentIndex];
        lightbox.classList.add('show');
    }

    function closeLightbox() {
        lightbox.classList.remove('show');
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + imgSources.length) % imgSources.length;
        lightboxImg.src = imgSources[currentIndex];
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % imgSources.length;
        lightboxImg.src = imgSources[currentIndex];
    }

    albumImgs.forEach((img, idx) => {
        img.addEventListener('click', () => openLightbox(idx));
    });

    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (btnPrev) btnPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (btnNext) btnNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (lightbox) lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
});

// Smooth scroll and vertical wedding scroll track navigation logic
document.addEventListener('DOMContentLoaded', () => {
    const scrollDownHint = document.getElementById('scrollDownHint');
    const fixedIndicator = document.getElementById('fixedScrollIndicator');
    const envelopeOverlay = document.getElementById('envelopeOverlay');
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const scrollNodes = document.querySelectorAll('.scroll_node');
    const btnScrollNext = document.getElementById('btnScrollNext');

    if (scrollDownHint) {
        scrollDownHint.addEventListener('click', () => {
            const nextSection = document.querySelector('.countdown_section') || document.querySelector('.gt_des');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (fixedIndicator) {
        // If envelope overlay is present and not opened, hide fixed indicator initially
        if (envelopeOverlay && !envelopeOverlay.classList.contains('opened')) {
            fixedIndicator.style.display = 'none';
        }

        // Show fixed indicator when envelope is opened
        const btnOpenEnvelope = document.getElementById('btnOpenEnvelope');
        const envelopeActionWrapper = document.querySelector('.envelope_action_wrapper');
        const showFixedIndicator = () => {
            fixedIndicator.style.display = 'flex';
            updateScrollProgress();
        };
        if (btnOpenEnvelope) btnOpenEnvelope.addEventListener('click', showFixedIndicator);
        if (envelopeActionWrapper) envelopeActionWrapper.addEventListener('click', showFixedIndicator);

        // Click on section node to scroll smoothly to target element
        scrollNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                e.stopPropagation();
                const selector = node.getAttribute('data-target');
                if (selector) {
                    const targetEl = document.querySelector(selector);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
        });

        // Click on next arrow button to scroll down 75% height
        if (btnScrollNext) {
            btnScrollNext.addEventListener('click', (e) => {
                e.stopPropagation();
                window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
            });
        }

        // Scroll progress calculation & active section detection
        function updateScrollProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

            if (scrollProgressBar) {
                scrollProgressBar.style.height = scrollPercent + '%';
            }

            // Find current active section based on scroll offset
            let currentActiveNode = null;
            scrollNodes.forEach(node => {
                const selector = node.getAttribute('data-target');
                if (selector) {
                    const targetEl = document.querySelector(selector);
                    if (targetEl) {
                        const rect = targetEl.getBoundingClientRect();
                        if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.15) {
                            currentActiveNode = node;
                        }
                    }
                }
            });

            if (currentActiveNode) {
                scrollNodes.forEach(n => n.classList.remove('active'));
                currentActiveNode.classList.add('active');
            }

            // Hide/dim at bottom of page
            const scrollPosition = scrollTop + window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;
            if (scrollPosition >= totalHeight - 50) {
                fixedIndicator.classList.add('hide_indicator');
            } else {
                fixedIndicator.classList.remove('hide_indicator');
            }
        }

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();
    }
});








