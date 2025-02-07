// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Modal
const modal = document.getElementById('modal');

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'unset';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });

    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email');
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', {
            name: name.value,
            email: email.value,
            message: message.value
        });
        contactForm.reset();
        alert('Thank you for your message! We will get back to you soon.');
    }
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const subscribeForm = document.getElementById('subscribe-form');
const subscribeEmail = document.getElementById('subscribe-email');
const errorMessage = subscribeForm.querySelector('.error-message');

// Add event listener for form submission
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get the email value
    const email = subscribeEmail.value.trim();

    // Clear any previous error message
    errorMessage.textContent = '';

    // Validate the email
    if (!email) {
        errorMessage.textContent = 'Please enter your email address.';
    } else if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        // Simulate a successful subscription (Here you can add your API call for real subscription)
        console.log('Subscribed:', email);
        
        // Reset the form after successful submission
        subscribeForm.reset();
        
        // Provide feedback to the user
        alert('Thank you for subscribing! You will receive updates soon.');
    }
});