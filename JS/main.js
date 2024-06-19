//variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
let colormenu = 'rgb(0, 255, 136)';



function menus() {
    let desplazamiento = window.pageYOffset;

    if (desplazamiento > 50) {
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
    if (desplazamiento < 50) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
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


// Función para abrir la ventana emergente con la imagen seleccionada
function abrirVentanaEmergente(src) {
    // Obtener el contenedor de la imagen
    var contenedor = document.getElementById("imagen-contenedor");
    // Limpiar el contenido anterior
    contenedor.innerHTML = "";
    // Crear una nueva imagen
    var imagen = document.createElement("img");
    // Establecer la fuente de la imagen
    imagen.src = src;
    // Establecer el tamaño de la imagen (opcional)
    imagen.style.width = "850px"; // Ancho deseado
    imagen.style.height = "600px"; // Altura deseada
    // Agregar la imagen al contenedor
    contenedor.appendChild(imagen);
    // Mostrar la ventana emergente
    document.getElementById("ventana-emergente").style.display = "block";
  }
  
  // Función para cerrar la ventana emergente
  function cerrarVentanaEmergente() {
    // Ocultar la ventana emergente
    document.getElementById("ventana-emergente").style.display = "none";
  }


