import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

export const navItems = [
  { href: "#home", label: "Home", icon: HomeRoundedIcon },
  { href: "#about-me", label: "About Me", icon: PersonRoundedIcon },
  { href: "#portfolio", label: "Projects", icon: WorkRoundedIcon },
  { href: "#contact", label: "Contact Me", icon: ContactMailRoundedIcon },
];

export const experienceItems = [
  {
    role: "Junior Full-Stack Developer",
    company: "Linnea Systems",
    period: "Aug 2024 - Feb 2026",
    details:
      "Developed responsive web interfaces with React and built backend features in Laravel for portfolio and small business products.",
  },
  {
    role: "Web Development Intern and Harware Technician",
    company: "PC Bee Davao",
    period: "2023 - 2024",
    details:
      "Maintained production websites, fixed UI issues, and improved accessibility and mobile responsiveness.",
  },
];

export const techStackItems = [
  { label: "PHP", iconUrl: "https://cdn.simpleicons.org/php" },
  {
    label: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript",
  },
  { label: "Python", iconUrl: "https://cdn.simpleicons.org/python" },
  { label: "React.js", iconUrl: "https://cdn.simpleicons.org/react" },
  { label: "Material UI", iconUrl: "https://cdn.simpleicons.org/mui" },
  { label: "HTML5", iconUrl: "https://cdn.simpleicons.org/html5" },
  { label: "CSS3", iconUrl: "https://cdn.simpleicons.org/css" },
  {
    label: "Bootstrap",
    iconUrl: "https://cdn.simpleicons.org/bootstrap",
  },
  { label: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel" },
  { label: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql" },
  { label: "DBeaver", iconUrl: "https://cdn.simpleicons.org/dbeaver" },
  { label: "Git", iconUrl: "https://cdn.simpleicons.org/git" },
  { label: "GitHub", iconUrl: "https://cdn.simpleicons.org/github" },
  {
    label: "Bitbucket",
    iconUrl: "https://cdn.simpleicons.org/bitbucket",
  },
  { label: "Docker", iconUrl: "https://cdn.simpleicons.org/docker" },
  { label: "Linux Admin", iconUrl: "https://cdn.simpleicons.org/linux" },
];

export const projects = [
  {
    title: "Qr-attendance",
    category: "Full-Stack",
    images: [
      `${import.meta.env.BASE_URL}qr-attendance/web-1.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-2.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-3.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-4.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-5.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-6.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-7.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-8.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-9.png`,
      `${import.meta.env.BASE_URL}qr-attendance/web-10.png`,
      `${import.meta.env.BASE_URL}qr-attendance/mob-1.jpg`,
      `${import.meta.env.BASE_URL}qr-attendance/mob-2.jpg`,
      `${import.meta.env.BASE_URL}qr-attendance/mob-3.jpg`,
      `${import.meta.env.BASE_URL}qr-attendance/mob-4.jpg`,
      `${import.meta.env.BASE_URL}qr-attendance/mob-5.jpg`,
    ],
    sections: [
      {
        key: "web",
        label: "Web",
        images: [
          `${import.meta.env.BASE_URL}qr-attendance/web-1.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-2.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-3.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-4.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-5.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-6.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-7.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-8.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-9.png`,
          `${import.meta.env.BASE_URL}qr-attendance/web-10.png`,
        ],
        bullets: [
          "Admin dashboard for attendance analytics and daily summaries.",
          "Student, teacher, and section management with role-based permissions.",
          "Attendance validation rules and section-based data access controls.",
          "Secure API integration with token authentication.",
        ],
      },
      {
        key: "mobile",
        label: "Mobile",
        images: [
          `${import.meta.env.BASE_URL}qr-attendance/mob-1.jpg`,
          `${import.meta.env.BASE_URL}qr-attendance/mob-2.jpg`,
          `${import.meta.env.BASE_URL}qr-attendance/mob-3.jpg`,
          `${import.meta.env.BASE_URL}qr-attendance/mob-4.jpg`,
          `${import.meta.env.BASE_URL}qr-attendance/mob-5.jpg`,
        ],
        bullets: [
          "Real-time QR scanning to quickly record student attendance.",
          "Teacher-focused workflow for per-section attendance sessions.",
          "Immediate submission to backend with validation and timestamping.",
          "Optional guardian SMS alerts based on attendance events.",
        ],
      },
    ],
    techStack: [
      "Laravel API",
      "React",
      "React Native",
      "Token Auth",
      "RBAC",
    ],
    summary:
      "QR Attendance System is a full-stack school attendance platform that digitizes student attendance tracking using QR code scanning. The system enables administrators to manage students, teachers, and class sections while allowing teachers to record attendance through a mobile app using real-time QR scanning. The project follows a monorepo architecture consisting of a Laravel API backend, a React web admin panel, and a React Native mobile application. It features secure token-based authentication, role-based access control, attendance validation rules, dashboard analytics, and optional SMS notifications for guardians. The platform streamlines attendance monitoring while enforcing section-based data access for teachers.",
  },
  {
    title: "Bcflow - Capstone Project",
    category: "Full-Stack",
    images: [
      `${import.meta.env.BASE_URL}bcflow/bcflow-1.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-2.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-3.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-4.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-5.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-6.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-7.png`,
      `${import.meta.env.BASE_URL}bcflow/bcflow-8.png`,
    ],
    techStack: ["Next.js", "Redux Toolkit", "Laravel API", "MySQL"],
    summary:
      "BC Flow is a full-stack workflow management application developed to digitize departmental purchase and reservation processes. The platform enables staff to submit requests, track approval progress, and manage reservations while administrators oversee budgets, departments, and users through role-based access control. The system features a Next.js frontend with Redux Toolkit for state management and a Laravel API backend secured with token authentication. It includes dashboards, approval workflows, budget monitoring, and administrative tools designed for internal organizational operations.",
  },
  {
    title: "Ordering System",
    category: "Web Development",
    images: [
      `${import.meta.env.BASE_URL}pcbee/pcbee-1.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-2.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-3.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-4.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-5.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-6.png`,
    ],
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Node.js", "Docker"],
    summary:
      "The Ordering Parts System is a web-based application that helps staff and administrators manage and track laptop parts orders from suppliers in one centralized platform. It allows users to create, update, and monitor orders with role-based access, improving order tracking efficiency and reducing manual follow-ups. The system is built using Laravel (PHP), MySQL, and a JavaScript frontend with Node.js/Yarn, with optional Docker support for deployment.",
  },
];
