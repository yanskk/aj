document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image gallery
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('click', e => {
            const src = e.target.src;
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.style.backgroundImage = `url(${src})`;
            gallery.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            overlay.addEventListener('click', () => {
                overlay.remove();
                document.body.style.overflow = 'auto';
            });
        });
    });

    // Contact form validation
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill out all fields.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });
});