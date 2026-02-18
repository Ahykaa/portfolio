import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const navItems = [
  { href: "#home", label: "Home", icon: HomeRoundedIcon },
  { href: "#about-me", label: "About Me", icon: PersonRoundedIcon },
  { href: "#portfolio", label: "Projects", icon: WorkRoundedIcon },
  { href: "#contact", label: "Contact Me", icon: ContactMailRoundedIcon },
];

const experienceItems = [
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

const techStackItems = [
  { label: "PHP", iconUrl: "https://cdn.simpleicons.org/php/1f2328" },
  {
    label: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript/1f2328",
  },
  { label: "Python", iconUrl: "https://cdn.simpleicons.org/python/1f2328" },
  { label: "React.js", iconUrl: "https://cdn.simpleicons.org/react/1f2328" },
  { label: "Material UI", iconUrl: "https://cdn.simpleicons.org/mui/1f2328" },
  { label: "HTML5", iconUrl: "https://cdn.simpleicons.org/html5/1f2328" },
  { label: "CSS3", iconUrl: "https://cdn.simpleicons.org/css/1f2328" },
  {
    label: "Bootstrap",
    iconUrl: "https://cdn.simpleicons.org/bootstrap/1f2328",
  },
  { label: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/1f2328" },
  { label: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/1f2328" },
  { label: "DBeaver", iconUrl: "https://cdn.simpleicons.org/dbeaver/1f2328" },
  { label: "Git", iconUrl: "https://cdn.simpleicons.org/git/1f2328" },
  { label: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/1f2328" },
  {
    label: "Bitbucket",
    iconUrl: "https://cdn.simpleicons.org/bitbucket/1f2328",
  },
  { label: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/1f2328" },
  { label: "Linux Admin", iconUrl: "https://cdn.simpleicons.org/linux/1f2328" },
];

const projects = [
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

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#e53935" },
    background: { default: "#f3f7fb", paper: "#ffffff" },
    text: { primary: "#272829", secondary: "#45505b" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
  },
});

function SectionTitle({ title, description }) {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "1.8rem", md: "2rem" }, color: "text.primary" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 58,
          height: 3,
          bgcolor: "primary.main",
          mx: "auto",
          my: 1.6,
          borderRadius: 99,
        }}
      />
      <Typography sx={{ color: "text.secondary", maxWidth: 760, mx: "auto" }}>
        {description}
      </Typography>
    </Box>
  );
}

export default function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const heroPhotoUrl = `${import.meta.env.BASE_URL}aic.png`;
  const aboutPhotoUrl = `${import.meta.env.BASE_URL}aic.jpg`;
  const techStackScrollRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [activeProjectSection, setActiveProjectSection] = useState("");
  const currentModalSection = activeProject
    ? activeProject.sections?.find(
        (section) => section.key === activeProjectSection,
      ) ?? null
    : null;
  const currentModalImages =
    currentModalSection?.images ?? activeProject?.images ?? [];
  const isMobileModalSection = currentModalSection?.key === "mobile";
  const [projectImageIndexes, setProjectImageIndexes] = useState(
    projects.reduce((acc, project) => {
      if (project.images?.length) acc[project.title] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProjectImageIndexes((prev) => {
        const next = { ...prev };
        projects.forEach((project) => {
          if (project.images?.length > 1) {
            next[project.title] =
              ((prev[project.title] ?? 0) + 1) % project.images.length;
          }
        });
        return next;
      });
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeProject || currentModalImages.length === 0) return undefined;
    const modalTimer = window.setInterval(() => {
      setModalImageIndex((prev) => (prev + 1) % currentModalImages.length);
    }, 2500);
    return () => window.clearInterval(modalTimer);
  }, [activeProject, currentModalImages.length]);

  const handleTechStackWheel = (event) => {
    const container = techStackScrollRef.current;
    if (!container) return;
    event.preventDefault();
    event.stopPropagation();
    container.scrollLeft += event.deltaY + event.deltaX;
  };

  const handleOpenProjectModal = (project) => {
    setActiveProject(project);
    setActiveProjectSection(project.sections?.[0]?.key ?? "");
    setModalImageIndex(project.sections?.length ? 0 : (projectImageIndexes[project.title] ?? 0));
  };

  const handleCloseProjectModal = () => {
    setActiveProject(null);
    setActiveProjectSection("");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <Box
          sx={{
            position: "fixed",
            right: { xs: 12, md: 18, lg: 22 },
            top: { xs: "42%", md: "50%" },
            transform: "translateY(-50%)",
            zIndex: 20,
            display: { xs: "block", lg: "block" },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 0,
              bgcolor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Stack spacing={0.8} sx={{ alignItems: "flex-end" }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    underline="none"
                    aria-label={item.label}
                    sx={{
                      width: { xs: 42, lg: 44 },
                      height: { xs: 42, lg: 44 },
                      borderRadius: 99,
                      display: "inline-flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      alignSelf: "flex-end",
                      gap: 1,
                      px: 1.45,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      color: "#45505b",
                      bgcolor: "#f2f3f5",
                      transition: "all 220ms ease",
                      "& .nav-label": {
                        maxWidth: 0,
                        opacity: 0,
                        fontSize: "0.98rem",
                        fontWeight: 500,
                        mr: 0,
                        transition: "all 220ms ease",
                      },
                      "&:hover": {
                        width: { lg: 158 },
                        bgcolor: { lg: "primary.main" },
                        color: { lg: "white" },
                      },
                      "&:hover .nav-label": {
                        maxWidth: { lg: 92 },
                        opacity: { lg: 1 },
                        mr: { lg: 1 },
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                    <Box component="span" className="nav-label">
                      {item.label}
                    </Box>
                  </Link>
                );
              })}
            </Stack>
          </Paper>
        </Box>

        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "rgba(255,255,255,0.92)",
            borderBottom: "1px solid rgba(39,40,41,0.1)",
            display: "none",
          }}
        >
          <Toolbar sx={{ gap: 2, overflowX: "auto", py: 0.5 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                underline="none"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                {item.label}
              </Link>
            ))}
          </Toolbar>
        </AppBar>

        <Box
          id="home"
          component="section"
          sx={{
            minHeight: "100vh",
            display: "grid",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url(${heroPhotoUrl})`,
            backgroundSize: "cover",
            backgroundPosition: { xs: "60% center", md: "right center" },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              py: { xs: 7, md: 12 },
              px: { xs: 3, sm: 4 },
              pl: { lg: 10 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.7rem" },
                color: "#130f0fff",
              }}
            >
              Airica S. Patino
            </Typography>
            <Typography
              sx={{
                mt: 1.2,
                fontSize: { xs: "1.1rem", md: "1.55rem" },
                color: "#130f0fff",
              }}
            >
              Junior Full-Stack Web Developer
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 700,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              Building practical and user-friendly web experiences with a strong
              focus on clean UI, performance, and maintainable frontend-backend
              architecture.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2.6 }}>
              <IconButton
                component="a"
                href="mailto:patino.airica@gmail.com"
                sx={{ color: "#45505b" }}
              >
                <MailOutlineRoundedIcon />
              </IconButton>
              <IconButton component="a" href="#" sx={{ color: "#45505b" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton component="a" href="#" sx={{ color: "#45505b" }}>
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Container>
        </Box>

        <Box
          component="section"
          id="about-me"
          sx={{
            pt: { xs: 6, md: 8 },
            pb: { xs: 7, md: 10 },
            backgroundImage:
              "linear-gradient(180deg, #f8fbff 0%, #eef4ff 55%, #e8f0ff 100%)",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ pl: { lg: 10 }, px: { xs: 3, sm: 4, md: 6, lg: 0 } }}
          >
            <SectionTitle title="About Me" />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-start",
                gap: { xs: 2.5, md: 4 },
              }}
            >
              <Box
                sx={{
                  flex: { xs: "0 0 200px", sm: "0 0 230px", md: "0 0 260px" },
                  alignSelf: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  component="img"
                  src={aboutPhotoUrl}
                  alt="Profile"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 220, sm: 240, md: 260 },
                    borderRadius: 2,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  maxWidth: 680,
                  pt: { md: 2 },
                  mt: { xs: 1.5, md: 5 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#130f0fff",
                    fontSize: { xs: "1.15rem", md: "1.35rem" },
                    lineHeight: 1.4,
                  }}
                >
                  I'm Airica Patino a Web Developer
                </Typography>
                <Typography
                  sx={{
                    mt: 1.2,
                    color: "text.secondary",
                    lineHeight: { xs: 1.6, md: 1.8 },
                    textAlign: "left",
                    fontSize: { xs: "0.97rem", md: "1rem" },
                  }}
                >
                  I'm a full-stack developer who enjoys building reliable web
                  applications that solve real-world problems. I focus on clean
                  code, smooth data flow, and creating user-friendly experiences
                  across both frontend and backend.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ color: "text.secondary" }}>
                      <strong>Email:</strong> patino.airica@gmail.com
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mt: 1 }}>
                      <strong>Location:</strong> Philippines
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ color: "text.secondary" }}>
                      <strong>Status:</strong> Available for work
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mt: 1 }}>
                      <strong>Focus:</strong> React + Laravel
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  startIcon={<DownloadRoundedIcon />}
                  sx={{
                    mt: 2.5,
                    textTransform: "none",
                    borderRadius: 99,
                    px: 2.5,
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </Box>

            <Grid container spacing={3.2} sx={{ mt: 3.2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Resume Summary
                </Typography>
                {experienceItems.map((item) => (
                  <Box
                    key={item.role}
                    sx={{
                      borderLeft: "2px solid #e53935",
                      pl: 2,
                      pb: 2.2,
                      mb: 1.2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: "#2a2e33" }}>
                      {item.role}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#5f6d7a", mb: 0.6 }}
                    >
                      {item.period} | {item.company}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {item.details}
                    </Typography>
                  </Box>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Tech Stack
                </Typography>
                <Box
                  ref={techStackScrollRef}
                  onWheel={handleTechStackWheel}
                  sx={{
                    display: "flex",
                    gap: 1.3,
                    overflowX: "auto",
                    overflowY: "hidden",
                    overscrollBehavior: "contain",
                    pb: 1,
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": { height: 8 },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "rgba(39,40,41,0.25)",
                      borderRadius: 99,
                    },
                  }}
                >
                  {techStackItems.map((item) => (
                    <Paper
                      key={item.label}
                      elevation={0}
                      sx={{
                        minWidth: 108,
                        flex: "0 0 auto",
                        px: 1,
                        py: 1.2,
                        borderRadius: 2,
                        border: "none",
                        boxShadow: "none",
                        bgcolor: "transparent",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.iconUrl}
                        alt={item.label}
                        loading="lazy"
                        sx={{
                          width: 30,
                          height: 30,
                          objectFit: "contain",
                          display: "block",
                          mx: "auto",
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 0.6,
                          fontSize: "0.72rem",
                          letterSpacing: "0.06em",
                          fontWeight: 700,
                          textAlign: "center",
                        }}
                      >
                        {item.label.toUpperCase()}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          component="section"
          id="portfolio"
          sx={{
            py: { xs: 7, md: 10 },
            minHeight: { xs: "auto", md: "108vh" },
            backgroundImage:
              "linear-gradient(180deg, #f7fbff 0%, #eaf3ff 52%, #dfeeff 100%)",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ pl: { lg: 10 }, px: { xs: 3, sm: 4, md: 6, lg: 0 } }}
          >
            <Box sx={{ textAlign: "center", mb: 4.5 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.95rem", md: "2.5rem" },
                  color: "#111827",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Project
              </Typography>
              <Box
                sx={{
                  width: 58,
                  height: 3,
                  bgcolor: "primary.main",
                  mx: "auto",
                  my: 1.6,
                  borderRadius: 99,
                }}
              />
              <Typography
                sx={{
                  mt: 1.3,
                  px: { xs: 2, sm: 0 },
                  color: "#111827",
                  maxWidth: 760,
                  mx: "auto",
                }}
              >
                Selected projects showcasing practical web solutions, UI
                quality, and maintainable architecture.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                overflowX: { xs: "auto", md: "visible" },
                overflowY: "hidden",
                pb: { xs: 1.2, md: 0 },
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { height: 8 },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(39,40,41,0.25)",
                  borderRadius: 99,
                },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(3, minmax(240px, 1fr))",
                    sm: "repeat(3, minmax(250px, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                  },
                  gap: { xs: 2, md: 2.5 },
                  alignItems: "stretch",
                  minWidth: { xs: 780, sm: 820, md: "auto" },
                }}
              >
                {projects.map((project) => (
                  <Card
                    key={project.title}
                    onClick={() => handleOpenProjectModal(project)}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                      cursor: "pointer",
                      transition: "transform 180ms ease",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": { transform: "translateY(-4px)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        project.images?.[projectImageIndexes[project.title] ?? 0]
                      }
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: { xs: 190, sm: 210 },
                        objectFit: "cover",
                      }}
                    />
                    <CardContent
                      sx={{ flexGrow: 1, display: "grid", gap: 0.6 }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "1.08rem" }}>
                        {project.title}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={0.7}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{ mt: 0.3 }}
                      >
                        {project.techStack?.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              height: 22,
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              bgcolor: "rgba(229,57,53,0.1)",
                              color: "#b71c1c",
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        <Dialog
          open={Boolean(activeProject)}
          onClose={handleCloseProjectModal}
          fullWidth
          maxWidth="md"
        >
          {activeProject && (
            <>
              <DialogTitle>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  spacing={1.2}
                >
                  <Stack spacing={1} sx={{ minWidth: 0 }}>
                    <Box component="span" sx={{ fontWeight: 700 }}>
                      {activeProject.title}
                    </Box>
                    <Stack
                      direction="row"
                      spacing={0.7}
                      useFlexGap
                      flexWrap="wrap"
                    >
                      {activeProject.techStack?.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            bgcolor: "rgba(229,57,53,0.1)",
                            color: "#b71c1c",
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                  {activeProject.sections?.length > 1 && (
                    <Tabs
                      value={activeProjectSection}
                      onChange={(_, nextSection) => {
                        setActiveProjectSection(nextSection);
                        setModalImageIndex(0);
                      }}
                      sx={{
                        minHeight: 22,
                        flexShrink: 0,
                        "& .MuiTabs-indicator": { display: "none" },
                      }}
                    >
                      {activeProject.sections.map((section) => (
                        <Tab
                          key={section.key}
                          value={section.key}
                          label={section.label}
                          sx={{
                            minHeight: 22,
                            py: 0,
                            px: 1.2,
                            textTransform: "none",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            borderRadius: 999,
                            minWidth: 0,
                            color: "#7f1d1d",
                            bgcolor: "rgba(229,57,53,0.08)",
                            "&.Mui-selected": {
                              color: "white",
                              bgcolor: "#e53935",
                            },
                          }}
                        />
                      ))}
                    </Tabs>
                  )}
                </Stack>
              </DialogTitle>
              <DialogContent sx={{ pt: 1 }}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={currentModalImages[modalImageIndex]}
                    alt={activeProject.title}
                    sx={{
                      width: isMobileModalSection
                        ? { xs: "74%", sm: "58%", md: "42%" }
                        : "100%",
                      maxWidth: isMobileModalSection ? 360 : "100%",
                      height: isMobileModalSection
                        ? { xs: 360, md: 500 }
                        : { xs: 240, md: 420 },
                      objectFit: isMobileModalSection ? "contain" : "cover",
                      borderRadius: 2,
                      mx: "auto",
                      display: "block",
                    }}
                  />
                </Box>
                {currentModalImages.length > 1 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    sx={{ mt: 1.2 }}
                  >
                    {currentModalImages.map((_, index) => (
                      <Box
                        key={index}
                        component="button"
                        type="button"
                        aria-label={`Go to image ${index + 1}`}
                        onClick={() => setModalImageIndex(index)}
                        sx={{
                          width: 9,
                          height: 9,
                          p: 0,
                          border: "none",
                          borderRadius: "50%",
                          cursor: "pointer",
                          bgcolor:
                            index === modalImageIndex
                              ? "#e53935"
                              : "rgba(39,40,41,0.28)",
                        }}
                      />
                    ))}
                  </Stack>
                )}
                {currentModalSection?.bullets?.length > 0 && (
                  <Box
                    component="ul"
                    sx={{
                      mt: 1.8,
                      pl: 2.6,
                      color: "text.secondary",
                      lineHeight: 1.7,
                    }}
                  >
                    {currentModalSection.bullets.map((bullet) => (
                      <Box component="li" key={bullet} sx={{ mb: 0.4 }}>
                        {bullet}
                      </Box>
                    ))}
                  </Box>
                )}
                <Typography
                  sx={{ mt: 2, color: "text.secondary", lineHeight: 1.75 }}
                >
                  {activeProject.summary}
                </Typography>

              </DialogContent>
            </>
          )}
        </Dialog>

        <Box
          component="section"
          id="contact"
          sx={{
            py: { xs: 7, md: 10 },
            backgroundImage:
              "linear-gradient(180deg, #f7fbff 0%, #edf5ff 55%, #e7f0ff 100%)",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ pl: { lg: 10 }, px: { xs: 3, sm: 4, md: 6, lg: 0 } }}
          >
            <SectionTitle
              title="Contact Me"
              description="Let us work together on your next web project."
            />
            <Grid container spacing={2.2}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2.2, height: "100%" }}>
                  <Typography sx={{ fontWeight: 700 }}>Email</Typography>
                  <Typography sx={{ mt: 0.7, color: "text.secondary" }}>
                    patino.airica@gmail.com
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2.2, height: "100%" }}>
                  <Typography sx={{ fontWeight: 700 }}>LinkedIn</Typography>
                  <Typography sx={{ mt: 0.7, color: "text.secondary" }}>
                    linkedin.com/in/your-profile
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2.2, height: "100%" }}>
                  <Typography sx={{ fontWeight: 700 }}>GitHub</Typography>
                  <Typography sx={{ mt: 0.7, color: "text.secondary" }}>
                    github.com/your-username
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
