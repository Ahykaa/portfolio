import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TechChip from "../atoms/TechChip";

export default function PortfolioSection({
  projects,
  projectImageIndexes,
  onOpenProjectModal,
  techStackItems,
}) {
  const handleProjectWheel = (event) => {
    const container = event.currentTarget;
    const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
    if (!hasHorizontalScroll) return;

    event.preventDefault();
    event.stopPropagation();
    container.scrollLeft += event.deltaY + event.deltaX;
  };

  return (
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
        </Box>

        <Box
          onWheel={handleProjectWheel}
          sx={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            overscrollBehavior: "contain",
            pb: { xs: 1.2, md: 0.8 },
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
              display: "flex",
              gap: { xs: 2, md: 2.5 },
              alignItems: "stretch",
            }}
          >
            {projects.map((project) => {
              const visibleTech = project.techStack?.slice(0, 4) ?? [];
              const remainingTechCount =
                (project.techStack?.length ?? 0) - visibleTech.length;

              return (
                <Card
                  key={project.title}
                  onClick={() => onOpenProjectModal(project)}
                  sx={{
                    flex: "0 0 auto",
                    width: {
                      xs: "88vw",
                      sm: "46vw",
                      md: "calc((100% - 40px) / 3)",
                    },
                    borderRadius: 3,
                    boxShadow: "none",
                    border: "1px solid rgba(39,40,41,0.12)",
                    transition: "transform 180ms ease",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
                  <Box
                    component="img"
                    src={project.images?.[projectImageIndexes[project.title] ?? 0]}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: { xs: 190, sm: 210 },
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <CardContent sx={{ display: "grid", gap: 0.6 }}>
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
                        {visibleTech.map((tech) => (
                          <TechChip key={tech} label={tech} />
                        ))}
                        {remainingTechCount > 0 && (
                          <TechChip label={`+${remainingTechCount}`} />
                        )}
                      </Stack>
                    </CardContent>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 3.2, md: 4 } }}>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Tech Stack
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 1, sm: 1.2, md: 1.4 },
              gridTemplateColumns: {
                xs: "repeat(3, minmax(0, 1fr))",
                sm: "repeat(4, minmax(0, 1fr))",
                lg: "repeat(6, minmax(0, 1fr))",
                xl: "repeat(8, minmax(0, 1fr))",
              },
            }}
          >
            {techStackItems.map((item) => (
              <Paper
                key={item.label}
                elevation={0}
                sx={{
                  px: { xs: 0.7, sm: 0.9, md: 1 },
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
                    width: { xs: 28, md: 32 },
                    height: { xs: 28, md: 32 },
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
        </Box>
      </Container>
    </Box>
  );
}
