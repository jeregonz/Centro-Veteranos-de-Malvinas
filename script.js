document.addEventListener('DOMContentLoaded', function () {
    const popupHTML = `
    <div class="overlay">
        <div class="popup">
            <button class="close-pop-up">
                <i class="fa-solid fa-x"></i>
            </button>
            <h2>Ingresar al sistema</h2>
            
            <label for="username">Usuario</label>
            <input type="text" id="username"/>

            <label for="password">Contraseña</label>
            <input type="password" id="password"/>
            <a href="#">¿Olvidó su contraseña?</a>
            <p id="error">Error de logueo</p>
            <button id="btn-log-in">Ingresar</button>
        </div>
    </div>
`;
    let botonAcceder = document.getElementById('btn-acceder');
    let botonSalir = document.getElementById('btn-salir');
    let botonEditar = document.querySelector('.btn-editar');
    let botonSubir = document.querySelector(".btn-subir");

    botonSubir.addEventListener('click', goToTop);

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botonSubir.style.display = "block";
        } else {
            botonSubir.style.display = "none";
        }
    };

    botonAcceder.addEventListener('click', function () {
        // Insertar el popup en el body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Manejar el cierre del popup
        let ingresar = document.getElementById('btn-log-in');
        let closePopUp = document.querySelector(".close-pop-up"); 

        closePopUp.addEventListener('click', function(){
            document.querySelector('.overlay').remove();
        })

        ingresar.addEventListener('click', function () {
            let usuario = document.querySelector("#username");
            let contraseña = document.querySelector("#password");
            let errorHandler = document.querySelector("#error");

            if (usuario.value == "admin" && contraseña.value == "admin"){
                console.log("usuario logueado");
                errorHandler.style.display = 'none';
                loginUser()
                document.querySelector('.overlay').remove();
            }
            else {
                usuario.value = "";
                contraseña.value = "";
                errorHandler.style.display = 'inline';
                console.log("error de logueo");
            }
        });
    });

    botonSalir.addEventListener('click', ()=> {
        logoutUser()
        updateUI()
    })

    updateUI()

    function loginUser() {
        localStorage.setItem('isLoggedIn', 'true')
        console.log('loguinUser')
        updateUI()
    }

    function logoutUser() {
        localStorage.removeItem('isLoggedIn')
        console.log('Sesión cerrada')
        updateUI()
    }

    function updateUI() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

        if (isLoggedIn) {
            botonAcceder.style.display = 'none'
            botonSalir.style.display = 'block'
            if(botonEditar!=null)
                botonEditar.style.display = 'block'

        } else {
            botonAcceder.style.display = 'block'
            botonSalir.style.display = 'none'
            if(botonEditar!=null)
                botonEditar.style.display = 'none'
        }
    }

    function goToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
