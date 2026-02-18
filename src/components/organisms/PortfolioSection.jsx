import { Box, Card, CardContent, Container, Paper, Stack, Typography } from "@mui/material";
import TechChip from "../atoms/TechChip";

export default function PortfolioSection({
  projects,
  projectImageIndexes,
  onOpenProjectModal,
  techStackItems,
  techStackScrollRef,
  onTechStackWheel,
}) {
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
          <Typography
            sx={{
              mt: 1.3,
              px: { xs: 2, sm: 0 },
              color: "#111827",
              maxWidth: 760,
              mx: "auto",
            }}
          >
            Selected projects showcasing practical web solutions, UI quality,
            and maintainable architecture.
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
                onClick={() => onOpenProjectModal(project)}
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
                  src={project.images?.[projectImageIndexes[project.title] ?? 0]}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: { xs: 190, sm: 210 },
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: "grid", gap: 0.6 }}>
                  <Typography variant="h6" sx={{ fontSize: "1.08rem" }}>
                    {project.title}
                  </Typography>
                  <Stack direction="row" spacing={0.7} useFlexGap flexWrap="wrap" sx={{ mt: 0.3 }}>
                    {project.techStack?.map((tech) => (
                      <TechChip key={tech} label={tech} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 3.2, md: 4 } }}>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Tech Stack
          </Typography>
          <Box
            ref={techStackScrollRef}
            onWheel={onTechStackWheel}
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
        </Box>
      </Container>
    </Box>
  );
}
