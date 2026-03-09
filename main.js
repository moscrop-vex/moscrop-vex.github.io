function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("open");
}

function handleResize() {
    const sideMenu = document.getElementById("sideMenu");
    const width = window.innerWidth;

    if (width > 900) {
        sideMenu.classList.remove("open");
    }
}

window.addEventListener("resize", handleResize);