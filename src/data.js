import HeroImage from "/assets/profile.webp";
import TeknisiImage from "/assets/proyek/teknisi.jpg";
import FreelanceeImage from "/assets/proyek/freelancee.png";
import QualityImage from "/assets/proyek/quality.jpg";
import PlanImage from "/assets/proyek/plan.jpg";
import AdminImage from "/assets/proyek/admin.jpg";

const Image = {
  HeroImage,
  TeknisiImage,
  FreelanceeImage,
  QualityImage,
  PlanImage,
  AdminImage,
};

export default Image;

import Tools1 from "/assets/tools/office.png";
import Tools2 from "/assets/tools/libre.png";
import Tools3 from "/assets/tools/sap.png";
import Tools4 from "/assets/tools/erp.png";
import Tools5 from "/assets/tools/shop.png";
import Tools6 from "/assets/tools/audition.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/capcut.png";
import Tools9 from "/assets/tools/cisco.png";
import Tools10 from "/assets/tools/winbox.png";
import Tools11 from "/assets/tools/vscode.png";
import Tools12 from "/assets/tools/github.png";
import Tools13 from "/assets/tools/bootstrap.png";
import Tools14 from "/assets/tools/js.png";
import Tools15 from "/assets/tools/reactjs.png";
import Tools16 from "/assets/tools/tailwind.png";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Microsoft Office", ket: "Data APP", dad: "100" },
  { id: 2, gambar: Tools2, nama: "Libre Office", ket: "Data APP", dad: "200" },
  { id: 3, gambar: Tools3, nama: "SAP", ket: "Data APP", dad: "300" },
  { id: 4, gambar: Tools4, nama: "ERP", ket: "Data APP", dad: "400" },
  { id: 5, gambar: Tools5, nama: "Photoshop", ket: "Design APP", dad: "500" },
  { id: 6, gambar: Tools6, nama: "Audition", ket: "Voice APP", dad: "600" },
  { id: 7, gambar: Tools7, nama: "Canva", ket: "Design App", dad: "700" },
  { id: 8, gambar: Tools8, nama: "Capcut", ket: "Video Editor App", dad: "800" },
  { id: 9, gambar: Tools9, nama: "Cisco Packet Tracer", ket: "Internet Topologi App", dad: "900" },
  { id: 10, gambar: Tools10, nama: "Winbox", ket: "Internet Manage App", dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Visual Studio Code", ket: "Code Editor", dad: "1100" },
  { id: 12, gambar: Tools12, nama: "Github", ket: "Repository", dad: "1200" },
  { id: 13, gambar: Tools13, nama: "Bootstrap", ket: "Framework", dad: "1300" },
  { id: 14, gambar: Tools14, nama: "Javascript", ket: "Language", dad: "1400" },
  { id: 15, gambar: Tools15, nama: "React", ket: "Library", dad: "1500" },
  { id: 16, gambar: Tools16, nama: "Tailwind CSS", ket: "Framework", dad: "1600" },
];

import Proyek1 from "/assets/proyek/youtube.jpg";
import Proyek4 from "/assets/proyek/portfolio.jpg";
import Proyek7 from "/assets/proyek/dagusto.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Youtube",
    desk: "Membuat konten edukatif dalam bentuk video tutorial sebagai sarana berbagi pengetahuan.",
    tools: ["Capcut", "Photoshop"],
    dad: "100",
    link: "https://www.youtube.com/@m.suyuti210",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Web Portfolio",
    desk: "Membangun web portfolio pribadi sebagai media untuk menampilkan proyek dan keahlian yang saya miliki.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap", "Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "400",
    link: "https://suyuti29.github.io/Portfoliomsoe/",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Animasi",
    desk: "Editor audio dan video youtube dagusto_animation.",
    tools: ["Adobe audition", "Canva", "Capcut"],
    dad: "700",
    link: "https://www.youtube.com/@dagusto_animation",
  },
];
