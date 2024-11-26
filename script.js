document.addEventListener('DOMContentLoaded', function () {

    let botonAcceder = document.getElementById('btn-acceder');
    let botonSalir = document.getElementById('btn-salir');
    let botonEditar = document.querySelector('.btn-editar');
    let botonSubir = document.querySelector(".btn-subir");
    let subirFoto = document.querySelector("#subir-foto");

    if(subirFoto != null){
        subirFoto.addEventListener('click', showPopup)
    }

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
    
    

    botonAcceder.addEventListener('click', function () {
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
        // Insertar el popup en el body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Manejar el cierre del popup
        let ingresar = document.getElementById('btn-log-in');
        let closePopUp = document.querySelector(".close-pop-up");

        closePopUp.addEventListener('click', function () {
            document.querySelector('.overlay').remove();
        })

        ingresar.addEventListener('click', function () {
            let usuario = document.querySelector("#username");
            let contraseña = document.querySelector("#password");
            let errorHandler = document.querySelector("#error");

            if (usuario.value == "admin" && contraseña.value == "admin") {
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

    botonSalir.addEventListener('click', () => {
        logoutUser()
        updateUI()
    })

    updateUI();

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
            if (botonEditar != null)
                botonEditar.style.display = 'block'

        } else {
            botonAcceder.style.display = 'block'
            botonSalir.style.display = 'none'
            if (botonEditar != null)
                botonEditar.style.display = 'none'
        }
    }

    function showPopup() {
        const POPUPIMG =
            `<div class="popup-imagen">
                <div class="popup-imagen-content">
                    <span class="close-imagen-btn"><i class="fa-solid fa-x"></i></span>
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
            </div>`;

            document.body.insertAdjacentHTML('beforeend', POPUPIMG);

            let closePopUpImg = document.querySelector(".close-imagen-btn");

        closePopUpImg.addEventListener('click', function () {
            document.querySelector('.popup-imagen').remove();
        })
    }


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
