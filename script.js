const nav = document.querySelector ('.nav-menu');
const burger = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeMe = document.querySelector('.close');

function openMenu () {
    if (nav.style.right === '-100%') {
        nav.style.right = '0%';
        overlay.style.display = 'block';
    }
}

function closeMenu1 () {
    if (nav.style.right === '0%'); {
        nav.style.right = '-100%';
        overlay.style.display = 'none';
    }
}

function closeMenu2(e) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.style.right = '-100%';
        overlay.style.display = 'none';
    }
}


burger.addEventListener('click', openMenu);
closeMe.addEventListener('click', closeMenu1);
window.addEventListener('click', closeMenu2);
