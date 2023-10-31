const mainContent = document.getElementById("main-content");

window.addEventListener("wheel", (e) => {
    // Verifica si se está desplazando horizontalmente
    if (e.deltaY === 0) {
        // Ajusta la posición horizontal de la página según la dirección de la rueda
        mainContent.scrollLeft += e.deltaX;
    }
});