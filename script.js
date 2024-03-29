const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu 

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling 

const highLightMenu = () => {
    const elem = document.querySelector('.highLight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //Adds 'highLight' class to my menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highLight');
        aboutMenu.classList.remove('highLight');
        return;
    }   else if (window.innerWidth > 960 && scrollPas < 1400) {
        aboutMenu.classList.add('highLight');
        homeMenu.classList.remove('highLight');
        servicesMenu.classList.remove('highLight');
        return;
    }   else if (window.innerWidth > 960 && scrollPas < 2345) {
        aboutMenu.classList.remove('highLight');
        servicesMenu.classList.add('highLight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highLight');
    }
};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);

// Close mobile Menu when clicking on a menu item 

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);