import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SourceIcon from "@mui/icons-material/Source";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

export const navItems = [
  { href: "#home", label: "Home", icon: HomeRoundedIcon },
  { href: "#about-me", label: "About Me", icon: PersonRoundedIcon },
  { href: "#portfolio", label: "Projects", icon: SourceIcon },
  { href: "#contact", label: "Contact Me", icon: ContactMailRoundedIcon },
];

export const experienceItems = [
  {
    role: "Junior Full-Stack Developer",
    company: "Linnea Systems",
    period: "Aug 2024 - Feb 2026",
    details:
      "Built and maintained full-stack web solutions using React and Laravel, including secure REST APIs, role-based access controls, and MySQL-backed features for internal and client-facing systems. Delivered responsive UI improvements, implemented backend business rules, and optimized data workflows for performance and maintainability.",
  },
  {
    role: "Web Development and Hardware Technician - Internship",
    company: "PC Bee Davao",
    period: "2023 - 2024",
    details:
      "Completed a 486-hour internship covering technical diagnostics and laptop repair while serving as lead developer for a web-based ordering system under programmer supervision. Owned frontend/backend implementation, maintained production pages, fixed UI issues, and improved mobile responsiveness and usability.",
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
    githubUrl: "https://github.com/Ahykaa",
    liveDemoUrl: "",
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
    features: [
      "Centralized student, teacher, and section management.",
      "QR attendance capture with strict schedule and section validations.",
      "Role-aware dashboard and analytics for attendance monitoring.",
    ],
    architectureSummary:
      "Monorepo setup with Laravel API as the core backend, React for admin web tools, and React Native for teacher-side scanning. Authentication and authorization are handled centrally for consistent role enforcement across clients.",
    summary:
      "QR Attendance System is a full-stack school attendance platform that digitizes student attendance tracking using QR code scanning. The system enables administrators to manage students, teachers, and class sections while allowing teachers to record attendance through a mobile app using real-time QR scanning. The project follows a monorepo architecture consisting of a Laravel API backend, a React web admin panel, and a React Native mobile application. It features secure token-based authentication, role-based access control, attendance validation rules, dashboard analytics, and optional SMS notifications for guardians. The platform streamlines attendance monitoring while enforcing section-based data access for teachers.",
  },
  {
    title: "Portfolio",
    category: "Frontend",
    githubUrl: "https://github.com/Ahykaa",
    liveDemoUrl: "https://ahykaa.github.io/portfolio",
    images: [
      `${import.meta.env.BASE_URL}portfolio/portfolio-1.png`,
      `${import.meta.env.BASE_URL}portfolio/portfolio-2.png`,
      `${import.meta.env.BASE_URL}portfolio/portfolio-3.png`,
      `${import.meta.env.BASE_URL}portfolio/portfolio-4.png`,
      `${import.meta.env.BASE_URL}portfolio/portfolio-5.png`,
    ],
    techStack: ["React", "Material UI", "Vite", "JavaScript"],
    features: [
      "Single-page portfolio with smooth section-based navigation.",
      "Project gallery with modal previews, tech chips, and action links.",
      "Responsive contact cards with clickable actions and copy-to-clipboard.",
    ],
    architectureSummary:
      "Built as a component-based React SPA using MUI for design consistency. Data-driven sections are defined in a central config for easier content updates and future expansion.",
    summary:
      "Personal portfolio website designed to present professional experience, selected projects, technical stack, and contact channels in a clean and responsive interface. The project emphasizes readability, modular UI components, and maintainable structure for quick updates.",
  },
  {
    title: "Bcflow - Capstone Project",
    category: "Full-Stack",
    githubUrl: "https://github.com/Ahykaa",
    liveDemoUrl: "",
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
    features: [
      "Department request and reservation workflows with approval stages.",
      "Budget monitoring dashboards for administrators and approvers.",
      "Role-based access for departments, staff, and management users.",
    ],
    architectureSummary:
      "Frontend uses Next.js with Redux Toolkit for stateful workflows, while Laravel API exposes secured endpoints and business rules. MySQL persists transactional data for requests, approvals, and departmental budgets.",
    summary:
      "BC Flow is a full-stack workflow management application developed to digitize departmental purchase and reservation processes. The platform enables staff to submit requests, track approval progress, and manage reservations while administrators oversee budgets, departments, and users through role-based access control. The system features a Next.js frontend with Redux Toolkit for state management and a Laravel API backend secured with token authentication. It includes dashboards, approval workflows, budget monitoring, and administrative tools designed for internal organizational operations.",
  },
  {
    title: "Ordering System",
    category: "Web Development",
    githubUrl: "https://github.com/Ahykaa",
    liveDemoUrl: "",
    images: [
      `${import.meta.env.BASE_URL}pcbee/pcbee-1.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-2.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-3.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-4.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-5.png`,
      `${import.meta.env.BASE_URL}pcbee/pcbee-6.png`,
    ],
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Node.js", "Docker"],
    features: [
      "End-to-end parts ordering with role-based management actions.",
      "Order tracking views to reduce manual follow-ups.",
      "Admin tools for updating order status and supplier records.",
    ],
    architectureSummary:
      "Laravel handles backend logic and APIs, with a MySQL datastore for orders, suppliers, and user permissions. The frontend layer provides operational forms and status views designed for daily internal use.",
    summary:
      "The Ordering Parts System is a web-based application that helps staff and administrators manage and track laptop parts orders from suppliers in one centralized platform. It allows users to create, update, and monitor orders with role-based access, improving order tracking efficiency and reducing manual follow-ups. The system is built using Laravel (PHP), MySQL, and a JavaScript frontend with Node.js/Yarn, with optional Docker support for deployment.",
  },
];
