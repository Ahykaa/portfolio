import { Box } from "@mui/material";
import FloatingNav from "../organisms/FloatingNav";
import MobileNavBar from "../organisms/MobileNavBar";
import HeroSection from "../organisms/HeroSection";
import AboutSection from "../organisms/AboutSection";
import PortfolioSection from "../organisms/PortfolioSection";
import ProjectModal from "../organisms/ProjectModal";
import ContactSection from "../organisms/ContactSection";

export default function PortfolioTemplate({
  navItems,
  heroPhotoUrl,
  aboutPhotoUrl,
  resumeUrl,
  experienceItems,
  techStackItems,
  projects,
  projectImageIndexes,
  onOpenProjectModal,
  activeProject,
  currentModalImages,
  currentModalSection,
  isMobileModalSection,
  modalImageIndex,
  activeProjectSection,
  onCloseProjectModal,
  onChangeProjectSection,
  onSelectModalImage,
}) {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <FloatingNav navItems={navItems} />
      <MobileNavBar navItems={navItems} />
      <HeroSection heroPhotoUrl={heroPhotoUrl} resumeUrl={resumeUrl} />
      <AboutSection
        resumeUrl={resumeUrl}
        aboutPhotoUrl={aboutPhotoUrl}
        experienceItems={experienceItems}
      />
      <PortfolioSection
        projects={projects}
        projectImageIndexes={projectImageIndexes}
        onOpenProjectModal={onOpenProjectModal}
        techStackItems={techStackItems}
      />
      <ProjectModal
        activeProject={activeProject}
        currentModalImages={currentModalImages}
        currentModalSection={currentModalSection}
        isMobileModalSection={isMobileModalSection}
        modalImageIndex={modalImageIndex}
        activeProjectSection={activeProjectSection}
        onClose={onCloseProjectModal}
        onChangeSection={onChangeProjectSection}
        onSelectImage={onSelectModalImage}
      />
      <ContactSection />
    </Box>
  );
}
