const toggler = document.getElementById('toggle');

const navbar = document.getElementById('navbar');
const home = document.getElementById('home');

let toggleMenu = false;
console.log(window.pageYOffset)

window.onscroll = function () {

    var navContainer = document.getElementById('nav-container');
    if (window.pageYOffset > 50) {
        navContainer.classList.add('nav-fixed')
        document.querySelector('.container').classList.add('container-fix')
    } else {
        navContainer.classList.remove('nav-fixed')
        document.querySelector('.container').classList.remove('container-fix')
    }
}


toggler.addEventListener('click', () => {
    if (!toggleMenu) {
        navbar.classList.add('active');
        toggler.innerHTML = '<i class="fa-solid fa-x"></i>'
        toggleMenu = true;
    } else {
        toggler.innerHTML = '<i class="fa-solid fa-bars"></i>'
        navbar.classList.remove('active');
        toggleMenu = false;
    }

    const list = navbar.getElementsByTagName('li');
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            toggler.innerHTML = '<i class="fa-solid fa-bars"></i>'
            navbar.classList.remove('active');
            toggleMenu = false;
        })
    }
})



