const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__nav');
const body = document.body;


if (burger && menu) {
    const aduptiveMenu = burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
}

export default aduptiveMenu;