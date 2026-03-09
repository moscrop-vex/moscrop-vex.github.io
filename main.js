function toggleMenu(){
    document.querySelector(".sideMenuBlur").classList.toggle("open");
}

function handleResize() {
    const sideMenuBlur = document.querySelector(".sideMenuBlur");
    const width = window.innerWidth;

    if (width > 900) {
        sideMenuBlur.classList.remove("open");
    }
}

const header = document.querySelector('.header');
const sideMenuBlur = document.querySelector('.sideMenuBlur');

function updateSideMenuPosition() {
    const headerHeight = header.offsetHeight;

    sideMenuBlur.style.top = `${headerHeight + 22}px`;
    sideMenuBlur.style.height = `calc(100% - ${headerHeight + 42}px)`;
}

window.addEventListener('resize', updateSideMenuPosition);
updateSideMenuPosition();

window.addEventListener("resize", handleResize);