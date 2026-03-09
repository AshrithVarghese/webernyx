/**
 * Webernyx Contact Form Controller
 * Handles validation, submission states, and user feedback.
 */

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = contactForm?.querySelector('button[type="submit"]');

/**
 * UI Feedback: Toggle Loading State
 * @param {boolean} isLoading 
 */
const setLoading = (isLoading) => {
    if (!submitBtn) return;
    
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ph ph-circle-notch animate-spin"></i> Sending...';
    } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="ph ph-paper-plane-tilt"></i>';
    }
};

/**
 * Show Form Message
 * @param {string} message 
 * @param {string} type - 'success' or 'error'
 */
const showStatus = (message, type) => {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
};

/**
 * Handle Form Submission
 */
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Get Data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // 2. Simple Validation
    if (!data.name || !data.email || !data.message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
    }

    setLoading(true);

    try {
        /**
         * Real-world implementation:
         * const response = await fetch('https://api.webernyx.in/contact', {
         * method: 'POST',
         * body: JSON.stringify(data)
         * });
         */
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 3. Success Feedback
        showStatus('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();

    } catch (error) {
        // 4. Error Feedback
        showStatus('Something went wrong. Please try again later.', 'error');
    } finally {
        setLoading(false);
    }
});

/**
 * Floating Label / Focus Effects
 * Adds a "technical" glow to the active input field.
 */
const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});
