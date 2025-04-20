const burgerMenu = document.querySelector('.header__burgerMenu');
const navLinks = document.querySelector('.header__links');
const body = document.querySelector('body');
const orderButtons = document.querySelectorAll('.order-button');
const popUp = document.querySelector('.popUp');
const popUpContent = document.querySelector('.popUp__div');
const closeButton = document.querySelector('.popUp__div button');
const headerRight = document.querySelector('.header__right');

window.addEventListener('scroll', () => {
    const maxScroll = window.innerHeight;
    const currentScroll = window.scrollY;
    const opacity = Math.min(currentScroll / maxScroll, 0.6);

    headerRight?.style.setProperty('--overlay-opacity', opacity);
    headerRight?.style.setProperty('--overlay-color', `rgba(0, 0, 0, ${opacity})`);
});

burgerMenu?.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks?.classList.toggle('active');
    body.classList.toggle('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        popUp?.classList.add('active');
        body.style.overflow = 'hidden';
    });
});

popUp?.addEventListener('click', (event) => {
    if (event.target === popUp || event.target === closeButton) {
        popUp.classList.remove('active');
        body.style.overflow = 'auto';
    }
});
