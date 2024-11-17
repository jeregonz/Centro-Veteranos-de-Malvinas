document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-acceder').addEventListener('click', function () {
        const popupHTML = `
            <div class="overlay">
                <div class="popup">
                    <h2>Ingresar al sistema</h2>
                    
                    <label for="username">Usuario</label>
                    <input type="text" id="username"/>

                    <label for="password">Contraseña</label>
                    <input type="password" id="password"/>
                    <a href="#">¿Olvidó su contraseña?</a>
                    <button id="btn-log-in">Ingresar</button>
                </div>
            </div>
        `;

        // Insertar el popup en el body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Manejar el cierre del popup
        document.getElementById('btn-log-in').addEventListener('click', function () {
            document.querySelector('.overlay').remove();
        });
    });
});
