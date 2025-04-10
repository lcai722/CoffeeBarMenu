// لودر
setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.menu-container').style.display = 'block';
}, 3500);

// انیمیشن اسکرول
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'cardPop 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));