/**
 * Webernyx Navigation Controller
 */
{
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link-item');

    const handleScroll = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    };

    const closeMobileMenu = () => {
        if (!navMenu) return;
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    const toggleMobileMenu = () => {
        if (!navMenu) return;
        const isOpen = navMenu.classList.contains('active');

        if (isOpen) {
            closeMobileMenu();
        } else {
            navMenu.classList.add('active');
            hamburger?.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // Close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Scroll effect
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Hamburger
    hamburger?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Overlay click
    mobileOverlay?.addEventListener('click', closeMobileMenu);

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}
