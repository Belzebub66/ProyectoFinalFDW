// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.blog-card');
    const sonido = document.getElementById('card-sound');

    contenedores.forEach(contenedor => {
        contenedor.addEventListener('mouseenter', function() {
            sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el inicio
            sonido.play();
        });
    });
});