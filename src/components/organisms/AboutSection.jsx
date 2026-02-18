import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import SectionTitle from "../atoms/SectionTitle";

export default function AboutSection({
  resumeUrl,
  aboutPhotoUrl,
  experienceItems,
}) {
  return (
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
              I&apos;m Airica Patiño a Web Developer
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
              I&apos;m a full-stack developer who enjoys building reliable web
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
          <Grid item xs={12}>
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
                <Typography sx={{ fontSize: "0.9rem", color: "#5f6d7a", mb: 0.6 }}>
                  {item.period} | {item.company}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>{item.details}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
