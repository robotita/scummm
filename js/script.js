addEventListener("load",() => { 
    var index = 0;
    const imagenes = document.querySelectorAll(".imagen");
    const classHide = "hidden", count = imagenes.length;
    nextImagen();
    function nextImagen() {
        imagenes[(index ++) % count].classList.add("hidden");
        imagenes[index % count].classList.remove("hidden");
        setTimeout(nextImagen, 200);
    }
});
