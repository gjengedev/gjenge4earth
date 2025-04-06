document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate API call (replace with actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success handling
            contactForm.reset();
            alert('Thank you for your message. We will get back to you soon!');
            
        } catch (error) {
            // Error handling
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
            
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
    
    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.classList.add('error');
        });
        
        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });
});