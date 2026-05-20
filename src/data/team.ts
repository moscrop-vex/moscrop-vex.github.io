export type Subteam = "32987A" | "32987B" | "staff" | "legacy";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  description: string;
  image: string;
  subteam: Subteam;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "mrder",
    name: "Mr. Der",
    role: "Sponsor Teacher",
    description:
      "Mr. Der is the team's sponsor teacher, providing guidance and support to the students. He is passionate about robotics and education, and his mentorship is invaluable to the team's success.",
    image: "/img/team/mrder.jpg",
    subteam: "staff",
  },
  {
    slug: "naran",
    name: "Naran",
    role: "Club President & Team Lead",
    description: "Description for Naran",
    image: "/img/team/naran.jpg",
    subteam: "32987A",
  },
  {
    slug: "danielv",
    name: "Daniel",
    role: "Everything Everywhere All at Once",
    description:
      "Daniel is a core member of the team, with a wide range of skills and responsibilities. He specializes in coding and building but fills in wherever needed, his productivity is the engine of the team.",
    image: "/img/team/danielv.jpg",
    subteam: "32987A",
  },
  {
    slug: "radin",
    name: "Radin",
    role: "Builder & Designer",
    description:
      "Radin is a reliable and hardworking member of the team, he specializes in building and design. His cheerful attitude keeps the spirit high and the team on track.",
    image: "/img/team/radin.jpg",
    subteam: "32987A",
  },
  {
    slug: "akash",
    name: "Akash",
    role: "Builder & Designer",
    description:
      "Akash is new to the team, but has already demonstrated his eagerness to learn and contribute. He is a quick learner and contributes greatly to building and design.",
    image: "/img/team/akash.jpg",
    subteam: "32987A",
  },
  {
    slug: "kaleb",
    name: "Kaleb",
    role: "Driver & Builder",
    description:
      "Kaleb plays a dual role as both a precision builder and the team's primary driver. His hands-on understanding of the hardware allows him to push the limits of the build during competition with confidence and control.",
    image: "/img/team/kaleb.jpg",
    subteam: "32987A",
  },
  {
    slug: "kai",
    name: "Kai",
    role: "Programmer",
    description:
      "Kai is an 'if it works, don't touch it' kind of guy. To others his code might be a puzzle, but it always gets the job done. His speciality is quick troubleshooting and duct tape logic to keep the robot moving when it counts most.",
    image: "/img/team/kai.jpg",
    subteam: "32987A",
  },
  {
    slug: "ian",
    name: "Ian",
    role: "Designer & Team Lead",
    description: "Placeholder description for Ian",
    image: "/img/team/ian.jpg",
    subteam: "32987B",
  },
  {
    slug: "aiden",
    name: "Aiden",
    role: "Programmer",
    description: "Placeholder description for Aiden",
    image: "/img/team/aiden.jpg",
    subteam: "32987B",
  },
  {
    slug: "danielh",
    name: "Daniel",
    role: "Builder",
    description: "Placeholder description for Daniel",
    image: "/img/team/danielh.jpg",
    subteam: "32987B",
  },
  {
    slug: "alex",
    name: "Alex",
    role: "Driver",
    description: "Placeholder description for Alex",
    image: "/img/team/alex.jpg",
    subteam: "32987B",
  },
  {
    slug: "chrisshen",
    name: "Christopher Shen",
    role: "Builder & Programmer",
    description:
      "Christopher led the building and programming of Gertrude, the team's pole-climbing robot that competed in the 2026 48th UBC Physics Olympics. His work on Gertrude helped establish the club's first collaboration with Moscrop's Physics Olympics team and set the foundation for future projects. He has since graduated from Moscrop Secondary and has begun his career in the tech industry as a software engineer.",
    image: "/img/team/chris.png",
    subteam: "legacy",
  },
  {
    slug: "joseph",
    name: "Joseph Liu",
    role: "Builder, Designer, and Head of Media",
    description:"Joseph was an indespensible member of Mosbots, coining our club logo, running marketing flyers, promoting on social media, being a part of the design team, and helping out where possible when building. He has since graduated from Moscrop Secondary and is pursuing secondary education at the University of Waterloo.",
    image:"/img/team/joseph.png",
    subteam: "legacy",
  },
  {
    slug: "krish",
    name: "Krish",
    role: "Programmer",
    description:"Krish is a dedicated programmer who has contributed significantly to the team's software development efforts. He has been instrumental in developing the codebase for the team's robots, ensuring that they operate efficiently and effectively during competitions. Krish's passion for programming and problem-solving has made him an invaluable member of the team. He has since graduated from Moscrop Secondary and is pursuing secondary education at BCIT.",
    image:"/img/team/krish.png",
    subteam: "legacy",
  },
];

export const subteams = [
  { id: "staff", label: "Staff", showLabel: false },
  { id: "32987A", label: "32987A", showLabel: true },
  { id: "32987B", label: "32987B", showLabel: true },
  { id: "legacy", label: "Legacy", showLabel: true },
] as const;
