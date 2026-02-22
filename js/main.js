// Budget Smart Living - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Email signup form handling
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Placeholder for email signup - integrate with your email service
                alert('Thank you for subscribing! We\'ll send you weekly money tips.');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if implementing mobile menu later)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Track article clicks for analytics (placeholder)
    document.querySelectorAll('.article-card a, .footer-section a').forEach(link => {
        link.addEventListener('click', function() {
            // Placeholder for analytics tracking
            console.log('Article clicked:', this.href);
            // Example: ga('send', 'event', 'Article', 'click', this.href);
        });
    });
    
    // Basic form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // Lazy loading placeholder (for future images)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Back to top button (simple implementation)
    let backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.setAttribute('id', 'back-to-top');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #059669;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        font-size: 18px;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Simple affiliate link tracking (placeholder)
function trackAffiliateClick(element, product) {
    // Placeholder for affiliate link tracking
    console.log('Affiliate link clicked:', product);
    // Example: ga('send', 'event', 'Affiliate', 'click', product);
}

// Newsletter subscription handler (can be extended for real email service)
function subscribeToNewsletter(email) {
    // Placeholder - integrate with ConvertKit, Mailchimp, etc.
    console.log('Newsletter subscription:', email);
    return Promise.resolve(true);
}