export interface Robot {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export const robots: Robot[] = [
  {
    slug: "henry",
    name: "Henry",
    image: "/img/henry.jpeg",
    description:
      "Henry is our 2026-27 VEX V5 Override competition robot. He has so far competed in the 2026 PYRS Salish Fall Qualifier. As our second competition robot, Henry reached the quarterfinals at his first event, a strong start for our team as we keep learning and improving.",
  },
  {
    slug: "gabriel",
    name: "Gabriel",
    image: "/img/gabriel.jpg",
    description:
      "Gabriel is our 2025-26 VEX V5 Push Back competition robot. He competed in the 2026 Burnsview Regional VEX Robotics Competition, allowing the team to learn the ropes of VEX V5RC.",
  },
  {
    slug: "gertrude",
    name: "Gertrude",
    image: "/img/gertrude.jpg",
    description:
      "Gertrude is a pole-climber robot made from VEX V5 parts that competed in the 2026 48th UBC Physics Olympics pole climb event. She was designed in conjunction with the Moscrop Physics club and was the first robot built by the team.",
  },
];
