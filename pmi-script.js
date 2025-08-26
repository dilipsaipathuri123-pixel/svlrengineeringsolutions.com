// PMI Toolings Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a:not(.dropdown-toggle), .utility-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an external link
            if (href && href.startsWith('http')) {
                return;
            }
            
            // Check if it's a page link (contact.html, index.html, etc.)
            if (href && (href === 'contact.html' || href === 'index.html' || href.includes('.html'))) {
                return;
            }
            
            // Only prevent default for anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.capability-card, .leader-card, .industry-item, .feature, .equipment-card, .certification-card, .process-step, .portfolio-category, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.pmi-hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.capability-card, .leader-card, .industry-item, .feature, .equipment-card, .certification-card, .process-step, .portfolio-category, .gallery-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Industry items click effect
    const industryItems = document.querySelectorAll('.industry-item');
    industryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Capability cards click effect
    const capabilityCards = document.querySelectorAll('.capability-card');
    capabilityCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 150);
        });
    });

    // Leader cards click effect
    const leaderCards = document.querySelectorAll('.leader-card');
    leaderCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Equipment cards click effect
    const equipmentCards = document.querySelectorAll('.equipment-card');
    equipmentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 150);
        });
    });

    // Certification cards click effect
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Process steps click effect
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Portfolio categories click effect
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    portfolioCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Gallery items click effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove header shadow based on scroll position
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close any open modals (placeholder)
        if (e.key === 'Escape') {
            console.log('ESC pressed - close modals if any');
        }
        
        // Enter key on focused elements
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('industry-item')) {
                focusedElement.click();
            }
        }
    });

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

    // Add counter animation for statistics (if needed in future)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Add scroll to top functionality
    function createScrollToTop() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: #0066cc;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
        `;
        
        document.body.appendChild(scrollToTopBtn);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        scrollToTopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 16px rgba(0, 102, 204, 0.4)';
        });
        
        scrollToTopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.3)';
        });
    }

    // Initialize scroll to top
    createScrollToTop();

    // Contact tab click handler for PMI page
    const contactTab = document.getElementById('contact-tab');
    if (contactTab) {
        contactTab.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-50%) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-50%)';
            }, 150);
            
            // Navigate to contact page
            window.location.href = 'contact.html';
        });
    }

    // Add section highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // PMI Video handling
    const pmiVideo = document.querySelector('.pmi-hero-video');
    if (pmiVideo) {
        console.log('PMI video element found:', pmiVideo);
        
        // Ensure video is visible immediately
        pmiVideo.style.opacity = '1';
        pmiVideo.style.display = 'block';
        
        // Video loading event
        pmiVideo.addEventListener('loadeddata', function() {
            console.log('PMI video loaded successfully');
            this.style.opacity = '1';
        });
        
        // Video error handling
        pmiVideo.addEventListener('error', function() {
            console.log('PMI video failed to load, using fallback background');
            this.style.display = 'none';
        });
        
        // Video play event
        pmiVideo.addEventListener('play', function() {
            console.log('PMI video started playing');
            this.style.opacity = '1';
        });
        
        // Video canplay event
        pmiVideo.addEventListener('canplay', function() {
            console.log('PMI video can play');
            this.style.opacity = '1';
        });
        
        // Force video to be visible after a short delay
        setTimeout(() => {
            pmiVideo.style.opacity = '1';
            pmiVideo.style.display = 'block';
        }, 100);
    } else {
        console.log('PMI video element not found');
    }

    console.log('PMI Toolings page loaded successfully!');
    
    // Debug: Check if all elements are loaded
    console.log('PMI Hero section:', document.querySelector('.pmi-hero'));
    console.log('PMI Main content:', document.querySelector('.pmi-main'));
    console.log('Contact tab:', document.getElementById('contact-tab'));
    console.log('Navigation links:', document.querySelectorAll('.nav a, .utility-links a').length);
    console.log('PMI Video element:', pmiVideo);
});
