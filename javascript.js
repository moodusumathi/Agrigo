// Function to toggle the visibility of product details
function toggleDetails(element) {
    element.classList.toggle('active');
}

// Smooth scrolling for navigation links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Smooth scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form validation for contact form
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to allow validation

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Basic validation: Check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // If validation passes, show a thank you message and reset the form
    alert('Thank you for your message!');
    contactForm.reset(); // Clear the form after submission
});
