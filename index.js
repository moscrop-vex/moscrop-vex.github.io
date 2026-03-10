// pop‑up logic only exists on index page, guard against missing elements
const popup = document.getElementById("robotPopup");
const title = document.getElementById("popupTitle");
const desc = document.getElementById("popupDescription");
const closeBtn = document.querySelector(".close");

if (popup && title && desc) {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            if(card.classList.contains("gabriel")){
                title.textContent = "Gabriel";
                desc.textContent = "Gabriel is our 2025-26 VEX V5 Push Back competition robot.";
            }
            if(card.classList.contains("gertrude")){
                title.textContent = "Gertrude";
                desc.textContent = "Gertrude is a pole-climber robot made from VEX V5 parts that competed in the 2026 48th UBC Physics Olympics.";
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

/* mark the current page's desktop-menu link as active */
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

/* page transition disabled – links behave normally */
function setupPageTransition() {
    // nothing to do; navigation uses default browser behavior
}

/* initialise once DOM is ready (and handle the case where the event already fired) */
function initNavigation() {
    highlightCurrentLink();
    setupPageTransition();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}