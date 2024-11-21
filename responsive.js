let botonMenu = document.getElementById('menu-hamburguesa')
let navBar = document.querySelector('.navbar')

botonMenu.addEventListener("click", toggleMenu)

function toggleMenu() {
    navBar.classList.toggle("show");
}