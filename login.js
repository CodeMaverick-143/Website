document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Clear previous error message
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');

        // Placeholder email and password for demonstration (replace with actual authentication logic)
        const demoEmail = "user@example.com";
        const demoPassword = "Password123!";

        // Validate login credentials
        if (email.value === demoEmail && password.value === demoPassword) {
            // Redirect to the home page on successful login
            window.location.href = 'frontend/home.html';
        } else {
            // Show error message
            errorMessage.textContent = 'Invalid email or password. Please try again.';
            errorMessage.classList.remove('hidden');
        }
    });
});
