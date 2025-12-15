// Bluesky Cleaning Service - Main JavaScript

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initCookieConsent();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initScrollEffects();
});

// Language Switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'nl';

    // Set initial language
    setLanguage(savedLang);

    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === savedLang) {
            button.classList.add('active');
        }

        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);

            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Save preference
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            // Check if it's an input placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'META') {
                element.content = translation;
            } else if (element.tagName === 'TITLE') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// GDPR Cookie Consent
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    const cookieChoice = localStorage.getItem('cookieConsent');

    // Show banner if no choice has been made
    if (!cookieChoice) {
        setTimeout(() => {
            cookieConsent.style.display = 'block';
            cookieConsent.classList.add('show');
        }, 1000);
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);

        // Enable analytics if accepted
        enableAnalytics();
    });

    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);
    });
}

function enableAnalytics() {
    // Add your analytics code here (Google Analytics, etc.)
    // Only called when user accepts cookies
    console.log('Analytics enabled');
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#' || href === '#privacy' || href === '#terms' || href === '#gdpr') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            privacy: document.getElementById('privacy').checked
        };

        // Validate
        if (!formData.name || !formData.email || !formData.message) {
            showFormMessage('error', getTranslation('contact.form.error'));
            return;
        }

        if (!formData.privacy) {
            showFormMessage('error', 'Please accept the privacy policy');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('error', 'Please enter a valid email address');
            return;
        }

        // Simulate form submission
        // In production, replace this with actual API call
        submitForm(formData);
    });
}

function submitForm(data) {
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate API call
    setTimeout(() => {
        // Success
        showFormMessage('success', getTranslation('contact.form.success'));
        document.getElementById('contactForm').reset();
        submitBtn.disabled = false;

        const currentLang = localStorage.getItem('language') || 'nl';
        submitBtn.textContent = translations[currentLang]['contact.form.submit'];

        // In production, send data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showFormMessage('success', getTranslation('contact.form.success'));
        //     form.reset();
        // })
        // .catch(error => {
        //     showFormMessage('error', getTranslation('contact.form.error'));
        // });
    }, 1500);
}

function showFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function getTranslation(key) {
    const lang = localStorage.getItem('language') || 'nl';
    return translations[lang][key] || key;
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow to navbar on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide navbar on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;

        // Animate elements on scroll
        animateOnScroll();
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .about-feature, .pricing-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('animate-in');
        }
    });
}

// Check URL parameters for language
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
if (langParam && ['nl', 'fr', 'en'].includes(langParam)) {
    localStorage.setItem('language', langParam);
    setLanguage(langParam);
}
