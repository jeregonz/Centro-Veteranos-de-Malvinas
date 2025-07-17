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
    
});
