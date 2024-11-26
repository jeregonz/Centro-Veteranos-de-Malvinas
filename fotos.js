document.addEventListener('DOMContentLoaded', function () {
    let section = document.querySelector('.section-secundaria');
    let imagenes = Array.from(section.querySelectorAll('img')); // Convertimos a array para facilitar la navegación

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => agrandar(imagen));
    });

    function agrandar(imagen) {
        let currentIndex = imagenes.indexOf(imagen);

        let htmlExpand = `<div class="overlay">
        <div class="expand-image">
            <button class="close-expand">X</button>
            <button class="prev-image">&lt;</button>
            <img src="${imagen.src}" alt="">
            <button class="next-image">&gt;</button>
        </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', htmlExpand);

        let botonCerrar = document.querySelector('.close-expand');
        let botonSiguiente = document.querySelector('.next-image');
        let botonAnterior = document.querySelector('.prev-image');
        let imagenExpandida = document.querySelector('.expand-image img');

        actualizarVisibilidadFlechas();

        botonCerrar.addEventListener('click', cerrar);
        botonSiguiente.addEventListener('click', mostrarSiguiente);
        botonAnterior.addEventListener('click', mostrarAnterior);
        document.addEventListener('keydown', manejarTeclado);

        function cerrar() {
            document.querySelector('.overlay').remove();
            document.removeEventListener('keydown', manejarTeclado); // Elimina el listener para evitar fugas de memoria
        }

        function mostrarSiguiente() {
            if (currentIndex < imagenes.length - 1) {
                currentIndex++;
                imagenExpandida.src = imagenes[currentIndex].src;
                actualizarVisibilidadFlechas();
            }
        }

        function mostrarAnterior() {
            if (currentIndex > 0) {
                currentIndex--;
                imagenExpandida.src = imagenes[currentIndex].src;
                actualizarVisibilidadFlechas();
            }
        }

        function actualizarVisibilidadFlechas() {
            botonAnterior.style.display = currentIndex === 0 ? 'none' : 'block';
            botonSiguiente.style.display = currentIndex === imagenes.length - 1 ? 'none' : 'block';
        }

        function manejarTeclado(event) {
            if (event.key === 'ArrowRight') {
                mostrarSiguiente();
            } else if (event.key === 'ArrowLeft') {
                mostrarAnterior();
            } else if (event.key === 'Escape') {
                cerrar();
            }
        }
    }
});
