// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.createElement('p');
    errorMessage.style.color = '#f87171'; // Tailwind red-400
    errorMessage.style.fontSize = '0.875rem'; // Tailwind text-sm
    errorMessage.style.marginTop = '0.5rem';
    errorMessage.style.display = 'none'; // Hidden by default

    // Append error message below the confirm password field
    confirmPassword.parentElement.appendChild(errorMessage);

    form.addEventListener('submit', (e) => {
        // Clear any previous error message
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        if (password.value !== confirmPassword.value) {
            // Show an error message if passwords don't match
            e.preventDefault(); // Prevent form submission
            errorMessage.textContent = 'Passwords do not match. Please try again.';
            errorMessage.style.display = 'block';
            confirmPassword.focus();
        }
    });
});
