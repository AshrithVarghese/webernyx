/**
 * Webernyx Animation Engine
 */
(function () {

    /**
     * Counter animation
     */
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const duration = 1800;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const startTime = performance.now();
            const suffix = target >= 100 ? '%' : target > 20 ? '+' : '';

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // ease out cubic
                const value = Math.floor(ease * target);
                counter.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(update);
                else counter.textContent = target + suffix;
            };

            requestAnimationFrame(update);
        });
    };

    /**
     * Intersection Observer for reveal + counter trigger
     */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                if (entry.target.classList.contains('trust-section')) {
                    animateCounters();
                    revealObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    /**
     * Init
     */
    document.addEventListener('DOMContentLoaded', () => {
        // Observe sections and reveal elements
        document.querySelectorAll('section, .reveal').forEach(el => {
            revealObserver.observe(el);
        });

        // Also observe trust-section specifically for counters
        const trustSection = document.querySelector('.trust-section');
        if (trustSection) revealObserver.observe(trustSection);

        // Stagger nav links on mobile open
        const navLinks = document.querySelectorAll('.nav-link-item');
        navLinks.forEach((link, i) => {
            link.style.transitionDelay = `${i * 0.05}s`;
        });
    });

})();
