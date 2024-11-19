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

function showPopup() {
    const popupHtml = `
        <div id="popup" class="popup">
            <div class="popup-content">
                <h2>Sumá tu foto</h2>
                <form>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name">

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">

                    <label for="description">Descripción (hasta 250 caracteres)</label>
                    <textarea id="description" name="description" maxlength="250"></textarea>

                    <label for="file">Seleccionar archivo</label>
                    <input type="file" id="file" name="file" accept=".png, .jpg, .jpeg, .gif">

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    `;
    document.body.innerHTML += popupHtml;
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.parentNode.removeChild(popup); }

showPopup();

function showPopup() {
    const popupHtml = `
        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close-btn" onclick="closePopup()">&times;</span>
                <h2>Sumá tu foto</h2>
                <form>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name">

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">

                    <label for="description">Descripción (hasta 250 caracteres)</label>
                    <textarea id="description" name="description" maxlength="250"></textarea>

                    <label for="file">Seleccionar archivo</label>
                    <input type="file" id="file" name="file" accept=".png, .jpg, .jpeg, .gif">

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    `;
    document.body.innerHTML += popupHtml;
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.parentNode.removeChild(popup);
}

showPopup();
