document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');
    const donationMessage = document.getElementById('donationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const amount = document.getElementById('amount').value.trim();

        if (!name || !email || !amount) {
            displayMessage('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('El correo electrónico no es válido.', 'error');
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            displayMessage('Por favor, ingresa un monto válido.', 'error');
            return;
        }

        displayMessage('¡Gracias por tu generosa donación!', 'success');
        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayMessage(message, type) {
        donationMessage.textContent = message;
        donationMessage.className = type;
        donationMessage.classList.remove('hidden');
    }
});