document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.card-containerS');
    const sonido = document.getElementById('miSonido');

    contenedor.addEventListener('mouseenter', function() {
        sonido.play();
    });