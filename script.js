// Mobile Navigation Toggle Function
function toggleMobileNav() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-nav-toggle');
    
    if (nav && toggle) {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
        
        // Prevent body scroll when mobile nav is open
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-nav-toggle');
    
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !toggle.contains(e.target)) {
        nav.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll functionality for navigation links
    const navLinks = document.querySelectorAll('.nav a:not(.dropdown-toggle), .utility-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an external link
            if (href && href.startsWith('http')) {
                // Allow external links to work normally
                return;
            }
            
            // Check if it's a page link (contact.html, pmi-toolings.html, etc.)
            if (href && (href === 'contact.html' || href === 'pmi-toolings.html' || href.includes('.html'))) {
                // Allow page links to work normally (navigate to other pages)
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dropdown functionality
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        // Add hover functionality for all screen sizes
        dropdownToggle.addEventListener('mouseenter', function() {
            // Only apply hover effect on non-mobile devices
            if (window.innerWidth > 768) {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
                dropdownMenu.style.pointerEvents = 'auto';
            }
        });
        
        // Hide dropdown when mouse leaves the dropdown area
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            dropdown.addEventListener('mouseleave', function() {
                // Only apply hover effect on non-mobile devices
                if (window.innerWidth > 768) {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                    dropdownMenu.style.pointerEvents = 'none';
                }
            });
        }
        
        // Add click functionality for mobile/touch devices
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isVisible = dropdownMenu.style.opacity === '1';
            const dropdown = document.querySelector('.dropdown');
            
            if (isVisible) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
                dropdownMenu.style.pointerEvents = 'none';
                // Remove active class for mobile layout
                if (dropdown && window.innerWidth <= 768) {
                    dropdown.classList.remove('active');
                }
            } else {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
                dropdownMenu.style.pointerEvents = 'auto';
                // Add active class for mobile layout
                if (dropdown && window.innerWidth <= 768) {
                    dropdown.classList.add('active');
                }
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
                dropdownMenu.style.pointerEvents = 'none';
                // Remove active class for mobile layout
                const dropdown = document.querySelector('.dropdown');
                if (dropdown && window.innerWidth <= 768) {
                    dropdown.classList.remove('active');
                }
            }
        });
        
        // Handle window resize to reset dropdown state
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                // Reset to mobile state
                dropdownMenu.style.opacity = '';
                dropdownMenu.style.visibility = '';
                dropdownMenu.style.transform = '';
                dropdownMenu.style.pointerEvents = '';
            } else {
                // Reset active class when switching to desktop
                const dropdown = document.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }
        });
    }

    // CTA Button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add your desired action here
            console.log('CTA Button clicked - Our End-to-End Solutions');
            // Example: window.location.href = '/solutions';
        });
    }

    // Contact tab click handler
    const contactTab = document.querySelector('.contact-tab');
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

    // Scroll indicator click handler
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            // Scroll to next section or bottom of page
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

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

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.nav a, .utility-links a, .cta-button, .contact-tab');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Search functionality (placeholder)
    const searchIcon = document.querySelector('.icon-link[href="#search"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            // You can implement a search modal or redirect to search page
            console.log('Search clicked');
            // Example: showSearchModal();
        });
    }

    // Language switcher (placeholder)
    const languageLinks = document.querySelectorAll('.icon-link[href="#language"], .utility-links a[href="#language"]');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // You can implement language switching functionality
            console.log('Language switcher clicked');
            // Example: toggleLanguageMenu();
        });
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
            if (focusedElement && focusedElement.classList.contains('cta-button')) {
                focusedElement.click();
            }
        }
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
    const animatedElements = document.querySelectorAll('.hero-content, .nav a, .utility-links a');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Mobile menu toggle (for responsive design)
    function createMobileMenu() {
        const header = document.querySelector('.header-container');
        const nav = document.querySelector('.nav');
        const utilityLinks = document.querySelector('.utility-links');
        
        if (window.innerWidth <= 768) {
            // Add mobile menu button if not exists
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileBtn = document.createElement('button');
                mobileBtn.className = 'mobile-menu-btn';
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileBtn.style.cssText = `
                    display: none;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #333;
                `;
                
                header.appendChild(mobileBtn);
                
                mobileBtn.addEventListener('click', function() {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                    utilityLinks.style.display = utilityLinks.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        }
    }

    // Initialize mobile menu
    createMobileMenu();
    
    // Handle window resize
    window.addEventListener('resize', createMobileMenu);

    // Function to scroll to specific sections
    window.scrollToSection = function(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Handle hash navigation when page loads
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Small delay to ensure page is fully loaded
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }

    // Call hash navigation handler
    handleHashNavigation();

    console.log('SVLR Engineering Solutions website loaded successfully!');
});
