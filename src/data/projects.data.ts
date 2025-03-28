import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: p1,
    title: "MusicApp - Selsa",
    description:
      "Music playback interface presented as the final project in a bootcamp.",
    tags: ["React", "HTML", "CSS", "Responsive", "Js", "Inube"],
    repoUrl: "https://github.com/novadeveloper14/MusicApp-selsa",
    demoUrl: "https://novadeveloper14.github.io/MusicApp-selsa/",
  },
  {
    id: 2,
    image: p2,
    title: "Novalin",
    description: "Prototype of a video game sales application.",
    tags: ["HTML", "CSS", "Teamwork"],
    repoUrl: "https://github.com/novadeveloper14/Novalin",
    demoUrl: "https://novadeveloper14.github.io/Novalin/index.html",
  },
  {
    id: 3,
    image: p3,
    title: "Portfolio",
    description: "Prototype of a personal portfolio.",
    tags: ["HTML", "CSS", "React", "Js", "TypeScript"],
    repoUrl: "https://github.com/novadeveloper14/PortafolioJN",
    demoUrl: "https://novadeveloper14.github.io/portfolio",
  },
  {
    id: 4,
    image: p4,
    title: "FormikForm - Selsa",
    description: "Demo of a form using the Inubekit library.",
    tags: ["HTML", "CSS", "React", "Js", "Inube", "Formik"],
    repoUrl: "https://github.com/novadeveloper14/FormikForm",
    demoUrl: "",
  },
  {
    id: 5,
    image: p5,
    title: "NovaSP",
    description: "Prototype of an application for selling sports products.",
    tags: ["HTML", "CSS"],
    repoUrl: "https://github.com/novadeveloper14/NovaSP",
    demoUrl: "",
  },
  {
    id: 6,
    image: p6,
    title: "Tejidos Rebanca CRUD",
    description: "CRUD Final Technology Project for Tejidos Rebanca",
    tags: [
      "HTML",
      "CSS",
      "Js",
      "PHP",
      "Responsive",
      "MySQL",
      "Database",
      "CRUD",
      "Teamwork",
      "Login",
    ],
    repoUrl: "https://github.com/novadeveloper14/tejidosRebanca-Login-CRUD",
    demoUrl: "",
  },
];
