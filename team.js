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
                    description = "Daniel is a core member of the team, with a wide range of skills and responsibilities. He specializes in coding and building but fills in wherever needed, his productivity is the engine of the team.";
                    imageSrc = "img/team/danielv.jpg";
                } else if (classes.contains("radin")) {
                    name = "Radin";
                    memberRole = "Builder & Designer";                    
                    description = "Radin is a reliable and hardworking member of the team, he specializes in building and design. His cheerful attitude keeps the spirit high and the team on track."
                    imageSrc = "img/team/radin.jpg";
                } else if (classes.contains("kai")) {
                    name = "Kai";
                    memberRole = "Programmer";
                    description = "Kai is an ‘if it works, don't touch it' kind of guy. To others his code might be a puzzle, but it always gets the job done. His speciality is quick troubleshooting and duct tape logic to keep the robot moving when it counts most";
                    imageSrc = "img/team/kai.jpg";
                } else if (classes.contains("kaleb")) {
                    name = "Kaleb";
                    memberRole = "Driver & Builder";
                    description = "Kaleb plays a dual role as both a precision builder and the team's primary driver. His hands-on understanding of the hardware allows him to push the limits of the build during competition with confidence and control.";
                    imageSrc = "img/team/kaleb.jpg";
                }else if (classes.contains("akash")) {
                    name = "Akash";
                    memberRole = "Builder & Designer";
                    description = "Akash is new to the team, but has already demonstrated his eagerness to learn and contribute. He is a quick learner and contributes greatly to building and design.";
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
                }else if (classes.contains("mrder")) {
                    name = "Mr. Der";
                    memberRole = "Sponsor Teacher";
                    description = "Mr. Der is the team's sponsor teacher, providing guidance and support to the students. He is passionate about robotics and education, and his mentorship is invaluable to the team's success.";
                    imageSrc = "img/team/mrder.jpg";
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