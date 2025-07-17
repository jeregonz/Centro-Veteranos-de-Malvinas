document.addEventListener('DOMContentLoaded', function () {

    let botonSubir = document.querySelector(".btn-subir");

    if(botonSubir != null){
        botonSubir.addEventListener('click', goToTop);

        function goToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                botonSubir.style.display = "block";
            } else {
                botonSubir.style.display = "none";
            }
        };
    }

    let botonMenu = document.getElementById('menu-hamburguesa')
    let navBar = document.querySelector('.navbar')

    if (botonMenu != null){
        botonMenu.addEventListener("click", toggleMenu)

        function toggleMenu() {
            navBar.classList.toggle("show");
        }
    }

    let mostrarAtajos = document.querySelector('.mostrar-atajos');

    if (mostrarAtajos != null) {
        mostrarAtajos.addEventListener('click', () => {
            let selectors = document.querySelector('.selectors');
            selectors.classList.toggle('show');
            mostrarAtajos.querySelector('i').style.transform = selectors.classList.contains('show') ? 'rotate(270deg)' : 'rotate(90deg)';
        })
    }
    
});
