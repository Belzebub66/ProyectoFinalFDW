document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.blog-card');
    const sonido = document.getElementById('card-sound');

    contenedor.addEventListener('mouseenter', function() {
        sonido.play();
    });
    contenedor.addEventListener('mouseleave', function() {
        sonido.pause();
        sonido.currentTime = 0; // Reinicia el sonido para la próxima vez
    });
});