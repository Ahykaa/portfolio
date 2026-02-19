import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import {
  experienceItems,
  navItems,
  projects,
  techStackItems,
} from "./data/portfolioData";
import PortfolioTemplate from "./components/templates/PortfolioTemplate";
import { appTheme } from "./theme/appTheme";

export default function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const heroPhotoUrl = `${import.meta.env.BASE_URL}aic.png`;
  const aboutPhotoUrl = `${import.meta.env.BASE_URL}aic-fil.png`;
  const [activeProject, setActiveProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [activeProjectSection, setActiveProjectSection] = useState("");

  const currentModalSection = activeProject
    ? activeProject.sections?.find((section) => section.key === activeProjectSection) ??
      null
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

  const handleOpenProjectModal = (project) => {
    setActiveProject(project);
    setActiveProjectSection(project.sections?.[0]?.key ?? "");
    setModalImageIndex(
      project.sections?.length ? 0 : (projectImageIndexes[project.title] ?? 0),
    );
  };

  const handleCloseProjectModal = () => {
    setActiveProject(null);
    setActiveProjectSection("");
  };

  const handleChangeProjectSection = (nextSection) => {
    setActiveProjectSection(nextSection);
    setModalImageIndex(0);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <PortfolioTemplate
        navItems={navItems}
        heroPhotoUrl={heroPhotoUrl}
        aboutPhotoUrl={aboutPhotoUrl}
        resumeUrl={resumeUrl}
        experienceItems={experienceItems}
        techStackItems={techStackItems}
        projects={projects}
        projectImageIndexes={projectImageIndexes}
        onOpenProjectModal={handleOpenProjectModal}
        activeProject={activeProject}
        currentModalImages={currentModalImages}
        currentModalSection={currentModalSection}
        isMobileModalSection={isMobileModalSection}
        modalImageIndex={modalImageIndex}
        activeProjectSection={activeProjectSection}
        onCloseProjectModal={handleCloseProjectModal}
        onChangeProjectSection={handleChangeProjectSection}
        onSelectModalImage={setModalImageIndex}
      />
    </ThemeProvider>
  );
}
