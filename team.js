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
                    description = "As President, Naran balances a heavy AP workload with the logistical demands of leading a competitive robotics team. He’s the primary strategist behind our build cycles, ensuring the team stays motivated and on schedule. When he’s not in the lab, he’s usually outdoors, bringing that same high energy to everything he does.";
                    imageSrc = "img/team/naran.jpg";
                } else if (classes.contains("danielv")) {
                    name = "Daniel";
                    memberRole = "Everything Everywhere All at Once";
                    description = "Daniel earned his title by being the team’s most versatile asset. He specializes in rapid prototyping, moving seamlessly between CAD, mechanical assembly, and code. You’ll find him in the robotics room during almost every free block and lunch period, dedicated to refining our designs until they’re competition-ready.";
                    imageSrc = "img/team/danielv.jpg";
                } else if (classes.contains("radin")) {
                    name = "Radin";
                    memberRole = "Builder & Designer";
                    description = "Radin is the technical anchor of our design process. He focuses on design research and mechanical integrity, constantly looking for ways to optimize our robot’s performance. His work ethic and ability to produce high-quality results under pressure make him a cornerstone of the build team.";
                    imageSrc = "img/team/radin.jpg";
                } else if (classes.contains("kaleb")) {
                    name = "Kaleb";
                    memberRole = "Driver & Builder";
                    description = "Kaleb is our primary driver, known for his precision and composure during the heat of competition. While his expertise lies in execution and mechanical assembly, he’s a powerhouse during 'crunch time' build sessions, ensuring our hardware is as reliable as his driving.";
                    imageSrc = "img/team/kaleb.jpg";
                } else if (classes.contains("kai")) {
                    name = "Kai";
                    memberRole = "Programmer";
                    description = "Kai handles the 'brains' of the robot, specializing in both software and electrical systems. He has a talent for translating complex mechanical goals into functional code. When given a technical challenge, he’s capable of engineering sophisticated solutions that significantly expand our robot's on-field capabilities.";
                    imageSrc = "img/team/kai.jpg";
                } else if (classes.contains("mrder")) {
                    name = "Mr. Der";
                    memberRole = "Sponsor Teacher";
                    description = "Mr. Der provides the essential administrative support that allows our team to compete at a high level. He manages our finances, coordinates travel logistics, and ensures we have a safe, well-equipped environment to work in. His mentorship is vital to our organization's stability.";
                    imageSrc = "img/team/mrder.jpg";
                } else if (classes.contains("akash")) {
                    name = "Akash";
                    memberRole = "Builder & Designer";
                    description = "Akash is an incredibly fast learner who transitioned from rocket building to advanced robotics with ease. He approaches every design problem with a focus on efficiency and innovation, making him an invaluable asset when we need to pivot strategies or master new technologies quickly.";
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