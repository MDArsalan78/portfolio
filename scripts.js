// Function to handle tab switching
function opentab(tabName) {
    // Get all tab content elements
    var tabs = document.querySelectorAll('.tab-contents');
    // Hide all tab content
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Remove active-link class from all tab titles
    var tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    // Show the clicked tab content
    document.getElementById(tabName).classList.add('active-tab');
    // Add active-link class to the clicked tab title
    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add('active-link');
}

// Handle form submission
document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = this.Name.value;
    var email = this.Email.value;
    var message = this.Message.value;

    // Basic validation
    if (name && email && message) {
        // You can add code here to send form data to a server or service
        console.log('Form submitted with', { name, email, message });

        // Show a success message
        document.getElementById('msg').innerText = 'Your message has been sent!';
        this.reset(); // Clear the form
    } else {
        // Show an error message
        document.getElementById('msg').innerText = 'Please fill out all fields.';
    }
});
