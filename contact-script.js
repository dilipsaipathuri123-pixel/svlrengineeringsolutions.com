// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Home tab click handler for contact page
    const homeTab = document.getElementById('home-tab');
    if (homeTab) {
        homeTab.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-50%) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-50%)';
            }, 150);
            
            // Navigate to home page
            window.location.href = 'index.html';
        });
    }
    
    // Character counter for message textarea
    const messageTextarea = document.querySelector('textarea[name="message"]');
    const charCount = document.querySelector('.char-count');
    
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            const maxLength = this.getAttribute('maxlength');
            charCount.textContent = currentLength;
            
            // Change color when approaching limit
            if (currentLength > maxLength * 0.8) {
                charCount.style.color = '#ff6b6b';
            } else {
                charCount.style.color = '#999';
            }
        });
    }
    
    // Captcha refresh functionality
    const refreshButton = document.querySelector('.refresh-captcha');
    const captchaText = document.querySelector('.captcha-text');
    
    if (refreshButton && captchaText) {
        refreshButton.addEventListener('click', function() {
            generateNewCaptcha();
        });
    }
    
    // Generate new captcha
    function generateNewCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let newCaptcha = '';
        
        for (let i = 0; i < 5; i++) {
            newCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        captchaText.textContent = newCaptcha.split('').join(' ');
        
        // Clear the captcha input field
        const captchaInput = document.querySelector('input[name="captcha"]');
        if (captchaInput) {
            captchaInput.value = '';
        }
    }
    
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
    }
    
    // Form validation
    function validateForm() {
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;
        
        // Clear previous error states
        clearErrors();
        
        // Check required fields
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showError(field, 'This field is required');
                isValid = false;
            }
        });
        
        // Validate email
        const emailField = contactForm.querySelector('input[name="email"]');
        if (emailField && emailField.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                showError(emailField, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Validate captcha
        const captchaInput = contactForm.querySelector('input[name="captcha"]');
        const captchaText = document.querySelector('.captcha-text');
        
        if (captchaInput && captchaText) {
            const userInput = captchaInput.value.trim().replace(/\s/g, '');
            const correctCaptcha = captchaText.textContent.replace(/\s/g, '');
            
            if (userInput !== correctCaptcha) {
                showError(captchaInput, 'Captcha code is incorrect');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(field, message) {
        field.style.borderColor = '#ff6b6b';
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff6b6b';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        
        // Insert error message after the field
        field.parentNode.appendChild(errorDiv);
    }
    
    // Clear all error messages
    function clearErrors() {
        // Remove error styling
        const fields = contactForm.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.style.borderColor = '#e0e0e0';
        });
        
        // Remove error messages
        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.remove();
        });
    }
    
    // Form submission
    function submitForm() {
        const submitButton = contactForm.querySelector('.send-button');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            charCount.textContent = '0';
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
            
            // Generate new captcha
            generateNewCaptcha();
            
        }, 2000);
    }
    
    // Show success message
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="
                background: #d4edda;
                color: #155724;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
                border: 1px solid #c3e6cb;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                <i class="fas fa-check-circle" style="color: #28a745;"></i>
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
            </div>
        `;
        
        // Insert at the top of the form
        contactForm.insertBefore(successDiv, contactForm.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // Real-time validation for email field
    const emailField = contactForm.querySelector('input[name="email"]');
    if (emailField) {
        emailField.addEventListener('blur', function() {
            if (this.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value.trim())) {
                    showError(this, 'Please enter a valid email address');
                } else {
                    clearFieldError(this);
                }
            }
        });
    }
    
    // Clear field error
    function clearFieldError(field) {
        field.style.borderColor = '#e0e0e0';
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    // Auto-resize textarea
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 200) + 'px';
        });
    }
    
    // Focus management for better UX
    const firstField = contactForm.querySelector('input, select, textarea');
    if (firstField) {
        firstField.focus();
    }
    
    // Keyboard navigation
    contactForm.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            
            // Find next field
            const fields = Array.from(contactForm.querySelectorAll('input, select, textarea'));
            const currentIndex = fields.indexOf(e.target);
            const nextField = fields[currentIndex + 1];
            
            if (nextField) {
                nextField.focus();
            }
        }
    });
    
    // Initialize captcha on page load
    generateNewCaptcha();
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
