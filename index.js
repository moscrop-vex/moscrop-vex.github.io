const popup = document.getElementById("robotPopup");
const title = document.getElementById("popupTitle");
const desc = document.getElementById("popupDescription");
const img = document.getElementById("popupImage");
const closeBtn = document.querySelector(".close");

if (popup && title && desc && img) {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            if(card.classList.contains("gabriel")){
                title.textContent = "Gabriel";
                desc.textContent = "Gabriel is our 2025-26 VEX V5 Push Back competition robot. He competed in the 2026 Burnsview Regional VEX Robotics Competition, allowing the team to learn the ropes of VEX V5RC.";
                img.src = "img/gabriel.jpg";
                img.alt = "Gabriel robot";
            }
            if(card.classList.contains("gertrude")){
                title.textContent = "Gertrude";
                desc.textContent = "Gertrude is a pole-climber robot made from VEX V5 parts that competed in the 2026 48th UBC Physics Olympics pole climb event. She was designed in conjunction with the Moscrop Physics club and was the first robot built by the team.";
                img.src = "img/gertrude.jpg";
                img.alt = "Gertrude robot";
            }
            popup.style.display = "flex";
        });
    });
}

if (closeBtn && popup) {
    closeBtn.onclick = () => {
        popup.style.display = "none";
    };
    window.addEventListener('click', e => {
        if (e.target === popup) popup.style.display = "none";
    });
}

function highlightCurrentLink() {
    const links = document.querySelectorAll('.desktopMenu a');
    const current = window.location.origin + window.location.pathname;
    links.forEach(link => {
        const href = link.href.split('#')[0].split('?')[0];
        if (href === current) {
            link.classList.add('active');
        }
    });
}

function setupPageTransition() {
}

function initNavigation() {
    highlightCurrentLink();
    setupPageTransition();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}