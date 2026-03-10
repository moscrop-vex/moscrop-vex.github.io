const popup = document.getElementById("robotPopup");
const title = document.getElementById("popupTitle");
const desc = document.getElementById("popupDescription");
const closeBtn = document.querySelector(".close");

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

closeBtn.onclick = () => {
    popup.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
};