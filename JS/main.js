const nav = document.getElementById('nav');
const menu = document.getElementById('enlaces');
const abrir = document.getElementById('open');

let cerrado = true;

const colormenu = 'rgb(0, 255, 136)';


/* =========================================
   NAVEGACIÓN
========================================= */

function menus() {

    const desplazamiento = window.pageYOffset;

    if (desplazamiento >= 1254 && desplazamiento < 1987) {

        nav.className = 'about';

    } else if (desplazamiento >= 50) {

        nav.className = 'nav2';

    } else {

        nav.className = 'nav1';

    }

    abrir.style.color = colormenu;
}


/* =========================================
   MENÚ MÓVIL
========================================= */

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


/* =========================================
   PRELOADER
========================================= */

document.addEventListener('DOMContentLoaded', function () {

    const loader = document.getElementById('onload');

    if (loader) {
        loader.style.display = 'none';
    }

    document.body.classList.remove('hidden');

    menus();

});


/* =========================================
   SCROLL
========================================= */

window.addEventListener('scroll', menus);


/* =========================================
   REDIMENSIONAMIENTO
========================================= */

window.addEventListener('resize', function () {

    if (window.innerWidth >= 700) {

        cerrado = true;

        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');

    }

});


/* =========================================
   CERRAR MENÚ AL HACER CLICK FUERA
========================================= */

window.addEventListener('click', function (e) {

    if (!cerrado &&
        e.target !== abrir &&
        !abrir.contains(e.target)) {

        menu.style.width = '0%';
        menu.style.overflow = 'hidden';

        cerrado = true;

    }

});


/* =========================================
   BOTÓN DEL MENÚ
========================================= */

abrir.addEventListener('click', function (e) {

    e.stopPropagation();

    apertura();

});