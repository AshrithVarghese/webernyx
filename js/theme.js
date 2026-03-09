/**
 * Webernyx Theme Engine
 * Manages Dark/Light mode persistence and UI synchronization.
 */

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Icons for toggle state
const MOON_ICON = 'ph ph-moon';
const SUN_ICON = 'ph ph-sun';

/**
 * Updates the UI icon based on the current theme
 * @param {string} theme - 'dark' or 'light'
 */
const updateThemeIcon = (theme) => {
    if (theme === 'dark') {
        themeIcon.className = MOON_ICON;
    } else {
        themeIcon.className = SUN_ICON;
    }
};

/**
 * Sets the theme and saves it to local storage
 * @param {string} theme - 'dark' or 'light'
 */
const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('webernyx_theme', theme);
    updateThemeIcon(theme);
};

// Initialize Theme
const initTheme = () => {
    const savedTheme = localStorage.getItem('webernyx_theme');
    
    // Check if user has a saved preference, otherwise default to Dark Mode
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Fallback to dark (Signature Webernyx look)
        setTheme('dark');
    }
};

// Event Listener for Toggle Button
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add a temporary transition class to body to smooth out the change
    document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
    
    setTheme(newTheme);
});

// Run on load
document.addEventListener('DOMContentLoaded', initTheme);

// Handle System Preference Changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('webernyx_theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
