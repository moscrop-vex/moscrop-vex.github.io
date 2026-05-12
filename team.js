document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById("teamPopup");
    const title = document.getElementById("popupTitle");
    const role = document.getElementById("popupRole");
    const desc = document.getElementById("popupDescription");
    const img = document.getElementById("popupImage");
    const closeBtn = document.querySelector("#teamPopup .close");

    if (popup && title && role && desc && img) {
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                const classes = card.classList;
                let name = "";
                let memberRole = "";
                let description = "";
                let imageSrc = "";

                if (classes.contains("naran")) {
                    name = "Naran";
                    memberRole = "Club President & Team Lead";
                    description = "Description for Naran";
                    imageSrc = "img/team/naran.jpg";
                } else if (classes.contains("danielv")) {
                    name = "Daniel";
                    memberRole = "Everything Everywhere All at Once";
                    description = "Description for Daniel";
                    imageSrc = "img/team/danielv.jpg";
                } else if (classes.contains("radin")) {
                    name = "Radin";
                    memberRole = "Builder & Designer";
                    description = "Description for Radin";
                    imageSrc = "img/team/radin.jpg";
                } else if (classes.contains("kaleb")) {
                    name = "Kaleb";
                    memberRole = "Driver & Builder";
                    description = "Description for Kaleb";
                    imageSrc = "img/team/kaleb.jpg";
                } else if (classes.contains("kai")) {
                    name = "Kai";
                    memberRole = "Programmer";
                    description = "Description for Kai";
                    imageSrc = "img/team/kai.jpg";
                } else if (classes.contains("mrder")) {
                    name = "Mr. Der";
                    memberRole = "Sponsor Teacher";
                    description = "Description for Mr. Der";
                    imageSrc = "img/team/mrder.jpg";
                } else if (classes.contains("akash")) {
                    name = "Akash";
                    memberRole = "Builder & Designer";
                    description = "Description for Akash";
                    imageSrc = "img/team/akash.jpg";
                }else if (classes.contains("ian")) {
                    name = "Ian";
                    memberRole = "Designer & Team Lead";
                    description = "Description for Ian";
                    imageSrc = "img/team/ian.jpg";
                }else if (classes.contains("aiden")) {
                    name = "Aiden";
                    memberRole = "Programmer";
                    description = "Description for Aiden";
                    imageSrc = "img/team/aiden.jpg";
                }else if (classes.contains("danielh")) {
                    name = "Daniel";
                    memberRole = "Builder";
                    description = "Description for Daniel";
                    imageSrc = "img/team/danielh.jpg";
                }else if (classes.contains("alex")) {
                    name = "Alex";
                    memberRole = "Driver";
                    description = "Description for Alex";
                    imageSrc = "img/team/alex.jpg";
                }

                title.textContent = name;
                role.textContent = memberRole;
                desc.textContent = description;
                img.src = imageSrc;
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
});