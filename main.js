// Cursor parpadeante (solo efecto adicional)
setInterval(() => {
    const cursor = document.querySelector(".cursor");
    cursor.style.opacity = cursor.style.opacity == "0" ? "1" : "0";
}, 500);
