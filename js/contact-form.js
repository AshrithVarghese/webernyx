/**
 * Webernyx Contact Form Controller
 * Real-world implementation for FormSubmit.co
 */

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = contactForm?.querySelector('button[type="submit"]');

/**
 * UI Feedback: Toggle Loading State
 */
const setLoading = (isLoading) => {
    if (!submitBtn) return;
    
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.innerHTML = '<i class="ph ph-circle-notch animate-spin"></i> Sending...';
    } else {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = '<span>Send Message</span> <i class="ph ph-paper-plane-tilt"></i>';
    }
};

/**
 * Show Form Message
 */
const showStatus = (message, type) => {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
};

/**
 * Handle Form Submission via AJAX
 */
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Validation
    if (!data.name || !data.email || !data.phone || !data.message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showStatus('Message sent successfully! We will get back to you soon.', 'success');
            contactForm.reset();
            // Reset floating label styles
            document.querySelectorAll('.form-group').forEach(g => g.classList.remove('focused'));
        } else {
            throw new Error();
        }

    } catch (error) {
        showStatus('Something went wrong. Please try again later.', 'error');
    } finally {
        setLoading(false);
    }
});

/**
 * Floating Label Effects
 */
const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

inputs.forEach(input => {
    input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
    input.addEventListener('blur', () => {
        if (input.value === '') input.parentElement.classList.remove('focused');
    });
});
