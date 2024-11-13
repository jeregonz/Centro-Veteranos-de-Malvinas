document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-acceder').addEventListener('click', function () {
        const popupHTML = `
            <div class="overlay">
                <div class="popup">
                    <h2>Ingresar al sistema</h2>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <a href="#">¿Olvidó su contraseña?</a>
                    <button id="closePopup">Ingresar</button>
                </div>
            </div>
        `;

        // Insertar el popup en el body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Manejar el cierre del popup
        document.getElementById('closePopup').addEventListener('click', function () {
            document.querySelector('.overlay').remove();
        });
    });
});
