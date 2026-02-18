import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

export default function ProjectModal({
  activeProject,
  currentModalImages,
  currentModalSection,
  isMobileModalSection,
  modalImageIndex,
  activeProjectSection,
  onClose,
  onChangeSection,
  onSelectImage,
}) {
  return (
    <Dialog open={Boolean(activeProject)} onClose={onClose} fullWidth maxWidth="md">
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
              </Stack>
              {activeProject.sections?.length > 1 && (
                <Tabs
                  value={activeProjectSection}
                  onChange={(_, nextSection) => onChangeSection(nextSection)}
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
                  height: isMobileModalSection ? { xs: 360, md: 500 } : { xs: 240, md: 420 },
                  objectFit: isMobileModalSection ? "contain" : "cover",
                  borderRadius: 2,
                  mx: "auto",
                  display: "block",
                }}
              />
            </Box>
            {currentModalImages.length > 1 && (
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1.2 }}>
                {currentModalImages.map((_, index) => (
                  <Box
                    key={index}
                    component="button"
                    type="button"
                    aria-label={`Go to image ${index + 1}`}
                    onClick={() => onSelectImage(index)}
                    sx={{
                      width: 9,
                      height: 9,
                      p: 0,
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      bgcolor:
                        index === modalImageIndex ? "#e53935" : "rgba(39,40,41,0.28)",
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
            <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.75 }}>
              {activeProject.summary}
            </Typography>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}
