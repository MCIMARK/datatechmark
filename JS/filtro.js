document.addEventListener('DOMContentLoaded', function () {

    const filtros = document.querySelectorAll('.filter');
    const trabajos = document.querySelectorAll('.cont-work');

    filtros.forEach(function (filtro) {

        filtro.addEventListener('click', function () {

            // Activar filtro seleccionado
            filtros.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

            const valor = this.getAttribute('data-nombre');

            // Mostrar todos
            if (valor === 'todos') {

                trabajos.forEach(function (trabajo) {
                    trabajo.style.display = '';
                });

                return;
            }

            // Filtrar
            trabajos.forEach(function (trabajo) {

                if (trabajo.classList.contains(valor)) {
                    trabajo.style.display = '';
                } else {
                    trabajo.style.display = 'none';
                }

            });

        });

    });

});