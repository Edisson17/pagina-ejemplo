function cambiarAnchoImagenCSS(anchoContenedor) {
    document.documentElement.style
        .setProperty('--ancho-carrusel', anchoContenedor + 'px');
    document.querySelector(".carrusel img").style.width = anchoContenedor + "px";
    document.querySelector(".carrusel img").style.width = anchoContenedor + "px";
    
}  

function cambiarAnchoImagenID(anchoContenedor){//No se usa mala practica
    document.getElementById("idCarrusel").style.width = anchoContenedor + "px";
    document.querySelector("img.imagenDeCarrusel").style.width = anchoContenedor + "px";
}


