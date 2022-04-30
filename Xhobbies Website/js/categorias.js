const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const categoriasMenu = document.getElementById('categorias-menu');

openMenu.addEventListener("click", () => {
    mostrarMenu();
});
closeMenu.addEventListener("click", () => {
    ocultarMenu();
});

function mostrarMenu() {
categoriasMenu.style.display = 'block';
}
function ocultarMenu() {
categoriasMenu.style.display = "none";
}

