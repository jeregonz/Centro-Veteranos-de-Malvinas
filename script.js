document.addEventListener('DOMContentLoaded', function () {
    const popupHTML = `
    <div class="overlay">
        <div class="popup">
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

    let login = document.getElementById('btn-acceder');
    login.addEventListener('click', function () {
        // Insertar el popup en el body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Manejar el cierre del popup
        let ingresar = document.getElementById('btn-log-in');
        ingresar.addEventListener('click', function () {
            let usuario = document.querySelector("#username");
            let contraseña = document.querySelector("#password");
            let errorHandler = document.querySelector("#error");

            if (usuario.value == "admin" && contraseña.value == "admin"){
                console.log("usuario logueado");
                errorHandler.style.display = 'none';
            }
            else {
                usuario.value = "";
                contraseña.value = "";
                errorHandler.style.display = 'inline';
                console.log("error de logueo");
            }
        });
    });


});
