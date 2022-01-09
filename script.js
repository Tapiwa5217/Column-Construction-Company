var hamburgerMenu = document.querySelector('#hamburger-menu');
var closeBtn = document.querySelector('#close-btn');
var navMenu = document.querySelector('#nav-section nav');
var contactCloseBtn = document.querySelector('#contact-close-btn');
var mainCta = document.querySelector('#main-cta');
var bannerCta = document.querySelector('#banner-cta');
var popUpContact = document.querySelector('#pop-up-contact');
var navBtns = document.querySelectorAll('#nav-section nav ul li');
var footerNavBtns = document.querySelectorAll('#footer-nav nav ul li');

window.onload = function() {
    popUpContact.style.transition = '1s ease';
}

for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', function() {
        navMenu.style.transform = 'translateX(0)';
    })
}

navBtns[3].addEventListener('click', function() {
    navMenu.style.transform = 'translateX(0)';
    popUpContact.style.opacity = '1';
    popUpContact.style.pointerEvents = 'auto';

})

footerNavBtns[3].addEventListener('click', function() {
    popUpContact.style.opacity = '1';
    popUpContact.style.pointerEvents = 'auto';

})

hamburgerMenu.addEventListener('click', function() {
    navMenu.style.transform = 'translateX(-100%)';
    console.log('hello world');
});

closeBtn.addEventListener('click', function() {
    navMenu.style.transform = 'translateX(0)';
});

contactCloseBtn.addEventListener('click', function() {
    popUpContact.style.opacity = '0';
    popUpContact.style.pointerEvents = 'none';
});

mainCta.addEventListener('click', function() {
    popUpContact.style.opacity = '1';
    popUpContact.style.pointerEvents = 'auto';
});

bannerCta.addEventListener('click', function() {
    popUpContact.style.opacity = '1';
    popUpContact.style.pointerEvents = 'auto';
});