/**
 * Webernyx Main Orchestrator
 * High-level initialization and global site behavior.
 */

const Webernyx = {
    init: () => {
        console.log(
            "%c Webernyx %c v2.0.0 ",
            "color: #fff; background: #7c3aed; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: 700;",
            "color: #fff; background: #1e1b4b; padding: 4px 8px; border-radius: 0 4px 4px 0;"
        );

        Webernyx.setupCursor();
        Webernyx.setupLazyLoading();
        Webernyx.handleExternalLinks();
        Webernyx.setupScrollSpy();
    },

    /**
     * Custom cursor follower
     */
    setupCursor: () => {
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        // Smooth ring follow
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        };
        animateRing();

        // Hover effects on interactive elements
        const interactives = document.querySelectorAll('a, button, .tech-item, .stat-card, .service-card');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.style.transform = 'translate(-50%, -50%) scale(2.5)';
                ring.style.width = '54px';
                ring.style.height = '54px';
                ring.style.opacity = '0.3';
            });
            el.addEventListener('mouseleave', () => {
                dot.style.transform = 'translate(-50%, -50%) scale(1)';
                ring.style.width = '36px';
                ring.style.height = '36px';
                ring.style.opacity = '0.5';
            });
        });
    },

    /**
     * Lazy Loading for images
     */
    setupLazyLoading: () => {
        const images = document.querySelectorAll('img[data-src]');
        if (!images.length) return;

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    /**
     * Secure external links
     */
    handleExternalLinks: () => {
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            if (!link.rel) link.rel = 'noopener noreferrer';
        });
    },

    /**
     * ScrollSpy
     */
    setupScrollSpy: () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link-item');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                if (window.scrollY >= section.offsetTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (current && link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        }, { passive: true });
    }
};

document.addEventListener('DOMContentLoaded', () => Webernyx.init());

// Broken image fallback
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.opacity = '0.3';
    }
}, true);
