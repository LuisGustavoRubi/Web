document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            displayMessage('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('El correo electrónico no es válido.', 'error');
            return;
        }

        displayMessage('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.', 'success');
        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.classList.remove('hidden');
    }
});