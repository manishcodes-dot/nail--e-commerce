/**
 * LUXE NAILS - Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. Cart Functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Animation for visual feedback
            button.textContent = 'Added!';
            button.style.backgroundColor = 'var(--accent-color)';
            button.style.color = 'white';

            setTimeout(() => {
                button.textContent = 'Add to Bag';
                button.style.backgroundColor = 'transparent';
                button.style.color = 'var(--accent-color)';
            }, 1500);

            // Subtle cart icon shake
            const cartBtn = document.getElementById('cart-btn');
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            const button = newsletterForm.querySelector('button');

            // Fake submission
            const email = emailInput.value;
            button.textContent = 'Subscribed!';
            button.disabled = true;
            emailInput.value = '';

            console.log(`Subscribed: ${email}`);

            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.disabled = false;
            }, 3000);
        });
    }

    // 6. Sticky Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
});
