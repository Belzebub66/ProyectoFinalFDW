// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.blog-card');
    const sonido = document.getElementById('card-sound');

    const sonidos = [
        'https://cdn.freesound.org/previews/369/369960_6857950-lq.mp3',
        'https://cdn.freesound.org/previews/699/699296_5872390-lq.mp3',
        'https://cdn.freesound.org/previews/3/3526_7212-lq.mp3',
        'https://cdn.freesound.org/previews/614/614079_2476748-lq.mp3'
    ];

    contenedores.forEach(contenedor => {
        contenedor.addEventListener('mouseenter', function() {
            // Elige un sonido aleatorio de la lista
            const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
            sonido.src = sonidoAleatorio; // Cambia la fuente del audio
            sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el inicio
            sonido.play();
        });
    });
});