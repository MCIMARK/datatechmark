//variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
let colormenu = 'rgb(0, 255, 136)';



function menus() {
    let desplazamiento = window.pageYOffset;

    if (desplazamiento > 500) {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '0.8s';
        abrir.style.color = colormenu;
    }
    if (desplazamiento >= 1254 && desplazamiento <= 1987) {
        nav.classList.remove('nav2');
        nav.className = ('about');
        abrir.style.color = colormenu;
    }
    if (desplazamiento >= 1987) {
        nav.classList.remove('about');
        nav.className = ('nav2');
        abrir.style.color = colormenu;
    }
    if (desplazamiento < 500) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        menu.style.top = '70px';
        abrir.style.color = colormenu;
    }
}
function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('scroll', function () {
    menus();
    // console.log(window.pageYOffset);
});
window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
window.addEventListener('click', function (e) {
    if (cerrado == false) {
        let span = this.document.querySelector('span');
        if (e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
}
});
abrir.addEventListener('click', function () {
    apertura();
});

