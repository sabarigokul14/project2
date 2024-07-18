 // script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Perform form validation (you can add more checks as needed)
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name && email && message) {
            // Example: Send form data to a server or display a success message
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            alert('Message sent successfully!');
            contactForm.reset(); // Clear form fields
        } else {
            alert('Please fill in all fields.');
        }
    });
});
