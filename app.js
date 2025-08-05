// Typing Animation
class TypingAnimation {
    constructor(element, phrases, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2500) {
        this.element = element;
        this.phrases = phrases;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const current = this.phrases[this.currentPhrase];
        
        if (this.isDeleting) {
            this.element.textContent = current.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            this.element.textContent = current.substring(0, this.currentChar + 1);
            this.currentChar++;
        }
        
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.currentChar === current.length) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Particles Animation
class ParticlesAnimation {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 60;
        this.colors = ['#ff6b9d', '#9b59b6', '#00d4ff', '#ffb6c1', '#87ceeb'];
        
        this.init();
        this.animate();
        this.handleResize();
    }
    
    init() {
        this.container.innerHTML = '';
        this.particles = [];
        
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        particle.style.position = 'absolute';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.borderRadius = '50%';
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        particle.style.pointerEvents = 'none';
        
        // Animation properties
        particle.vx = (Math.random() - 0.5) * 0.8;
        particle.vy = (Math.random() - 0.5) * 0.8;
        particle.life = Math.random() * Math.PI * 2;
        particle.baseOpacity = parseFloat(particle.style.opacity);
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }
    
    animate() {
        this.particles.forEach((particle, index) => {
            particle.life += 0.02;
            
            let x = parseFloat(particle.style.left);
            let y = parseFloat(particle.style.top);
            
            x += particle.vx;
            y += particle.vy;
            
            // Bounce off edges
            if (x <= 0 || x >= 98) {
                particle.vx *= -1;
                x = Math.max(0, Math.min(98, x));
            }
            if (y <= 0 || y >= 98) {
                particle.vy *= -1;
                y = Math.max(0, Math.min(98, y));
            }
            
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            
            // Pulsing effect
            const pulseOpacity = (Math.sin(particle.life) + 1) * 0.3 + 0.2;
            particle.style.opacity = Math.min(particle.baseOpacity, pulseOpacity);
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            // Adjust particle count based on screen size
            const newCount = window.innerWidth < 768 ? 30 : 60;
            if (newCount !== this.particleCount) {
                this.particleCount = newCount;
                this.init();
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn-secondary[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Mobile Menu Functions
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skills bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 400);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe cards and other elements
    const cards = document.querySelectorAll('.education-card, .experience-card, .project-card, .skill-item');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Skills Bar Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, index * 150);
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 107, 157, 0.15)';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 157, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 157, 0.1)';
        }
        
        lastScroll = currentScroll;
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (this.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }
}

// Form Handling
function initFormHandling() {
    const form = document.querySelector('.form');
    
    if (form) {
        // Add input animations
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentNode.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentNode.classList.remove('focused');
                }
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            // Enhanced validation
            if (!name) {
                showNotification('Please enter your name', 'error');
                nameInput.focus();
                return;
            }
            
            if (!email || !isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }
            
            if (!message) {
                showNotification('Please enter your message', 'error');
                messageInput.focus();
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.style.pointerEvents = 'auto';
                
                showNotification('Message sent successfully! 🎉', 'success');
                this.reset();
                
                // Remove focused states
                inputs.forEach(input => {
                    input.parentNode.classList.remove('focused');
                });
            }, 2500);
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// External Links Handler
function initExternalLinks() {
    // Handle all external links
    const externalLinks = document.querySelectorAll('a[href*="github.com"], a[href*="linkedin.com"], a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // Ensure proper attributes
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add click tracking
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            if (url && url !== '#' && !url.startsWith('#')) {
                console.log(`Opening external link: ${url}`);
            }
        });
    });
    
    // Handle resume download
    const resumeBtn = document.querySelector('.btn-resume');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            showNotification('Resume download started! 📄', 'info');
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-text">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        color: '#ffffff',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'all 0.4s ease',
        maxWidth: '350px',
        minWidth: '300px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
        fontSize: '14px',
        lineHeight: '1.5',
        backdropFilter: 'blur(10px)'
    });
    
    // Type-specific styles
    const typeStyles = {
        success: {
            background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.9), rgba(155, 89, 182, 0.9))',
            border: '1px solid rgba(0, 212, 255, 0.4)'
        },
        error: {
            background: 'linear-gradient(45deg, rgba(255, 107, 157, 0.9), rgba(155, 89, 182, 0.9))',
            border: '1px solid rgba(255, 107, 157, 0.4)'
        },
        info: {
            background: 'linear-gradient(45deg, rgba(155, 89, 182, 0.9), rgba(0, 212, 255, 0.9))',
            border: '1px solid rgba(155, 89, 182, 0.4)'
        }
    };
    
    Object.assign(notification.style, typeStyles[type] || typeStyles.info);
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #ffffff;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.opacity = '1';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.opacity = '0.7';
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    if (notification && notification.parentNode) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }
}

// Project Card Interactions
function initProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 107, 157, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: 20px;
                height: 20px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Cursor Effect (Desktop only)
function initCursorEffect() {
    if ('ontouchstart' in window || window.innerWidth <= 768) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    Object.assign(cursor.style, {
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'rgba(255, 107, 157, 0.6)',
        pointerEvents: 'none',
        zIndex: '9999',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.15s ease',
        mixBlendMode: 'difference'
    });
    
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Enhanced cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .nav-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursor.style.background = 'rgba(0, 212, 255, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(255, 107, 157, 0.6)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio website initializing...');
    
    // Initialize typing animation
    const typingElement = document.querySelector('.typing-text');
    const phrases = ['Aspiring ML Engineer', 'Data Enthusiast', 'Passionate Coder'];
    
    if (typingElement) {
        new TypingAnimation(typingElement, phrases);
        console.log('✅ Typing animation initialized');
    }
    
    // Initialize particles
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        new ParticlesAnimation(particlesContainer);
        console.log('✅ Particles animation initialized');
    }
    
    // Initialize all features
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScrollEffect();
    initMobileNavigation();
    initFormHandling();
    initExternalLinks();
    initProjectCardInteractions();
    
    // Initialize cursor effect on desktop only
    if (window.innerWidth > 768) {
        initCursorEffect();
        console.log('✅ Cursor effect initialized');
    }
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
        console.log('✅ Portfolio website fully loaded');
    }, 500);
    
    // Show welcome message after load
    setTimeout(() => {
        showNotification('Welcome to my portfolio! 🚀✨', 'info');
    }, 1500);
    
    console.log('🎉 All systems initialized successfully!');
});

// Handle window resize
window.addEventListener('resize', function() {
    const customCursor = document.querySelector('.custom-cursor');
    
    // Handle cursor effect based on screen size
    if (window.innerWidth <= 768 && customCursor) {
        customCursor.remove();
    } else if (window.innerWidth > 768 && !customCursor) {
        initCursorEffect();
    }
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some easter eggs for fun
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('profile-icon')) {
        clickCount++;
        if (clickCount === 5) {
            showNotification('🎉 You found the secret! Thanks for exploring!', 'success');
            clickCount = 0;
        }
    }
});

// Konami code easter egg
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === correctCode.length && 
        konamiCode.every((code, index) => code === correctCode[index])) {
        showNotification('🎮 Konami Code Activated! You are awesome!', 'success');
        konamiCode = [];
        
        // Add some fun particle explosion
        const particlesContainer = document.querySelector('.particles');
        if (particlesContainer) {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const explosion = document.createElement('div');
                    explosion.style.cssText = `
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background: #ff6b9d;
                        border-radius: 50%;
                        left: 50%;
                        top: 50%;
                        pointer-events: none;
                        animation: explode 1s ease-out forwards;
                    `;
                    particlesContainer.appendChild(explosion);
                    
                    setTimeout(() => explosion.remove(), 1000);
                }, i * 50);
            }
        }
    }
});

// Add explosion animation
const explosionStyle = document.createElement('style');
explosionStyle.textContent = `
    @keyframes explode {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(explosionStyle);

console.log('🎨 Portfolio JavaScript loaded successfully with all features!');
console.log('💡 Try clicking the profile icon 5 times or use the Konami code for surprises!');