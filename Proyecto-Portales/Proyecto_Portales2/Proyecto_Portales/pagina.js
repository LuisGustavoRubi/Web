document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');
    const donationForm = document.querySelector('#donationForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    if (donationForm) {
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const amount = document.querySelector('#amount').value;

            if (!name || !amount || amount <= 0) {
                alert('Por favor, rellena todos los campos correctamente.');
                return;
            }

            alert(`¡Gracias, ${name}, por tu donación de L${amount}!`);
            donationForm.reset();
        });
    }
});

const activePage = () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};
activePage();

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .hero-content, section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
};
animateOnScroll();
