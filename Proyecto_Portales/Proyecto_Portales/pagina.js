document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const activeId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === activeId) {
                    link.classList.add('active');
                }
            });
        }
    });
});
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('¡Bienvenido a nuestra ONG! Explora nuestra misión y programas.');
    }, 2000);
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});