document.addEventListener('DOMContentLoaded', function () {
    let section = document.querySelector('.section-secundaria')
    let imagenes = section.querySelectorAll('img')

    imagenes.forEach(imagen =>{
        imagen.addEventListener('click', ()=> agrandar(imagen));
    })

    function agrandar(imagen){
        let htmlExpand = `<div class="overlay">
        <div class="expand-image">
            <button class="close-expand">X</button>
            <img src="${imagen.src}" alt="">
        </div>
    </div>`;

   document.body.insertAdjacentHTML('beforeend', htmlExpand);

        let botonCerrar = document.querySelector('.close-expand');
        botonCerrar.addEventListener('click', cerrar);

        function cerrar(){
            document.querySelector('.overlay').remove();
        }

    }




})