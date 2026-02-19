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
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "260px minmax(0, 1fr)" },
            alignItems: "start",
            columnGap: { md: 4.5, lg: 5.5 },
            rowGap: { xs: 2.5, md: 0 },
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
              width: "100%",
              minWidth: 0,
              maxWidth: { md: "none" },
              pt: { md: 2 },
              mt: { xs: 1.5, md: 2.2 },
            }}
          >
            <Typography
              sx={{
                mt: 1,
                color: "#111827",
                fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" },
                fontWeight: 700,
                lineHeight: { xs: 1.25, md: 1.2 },
              }}
            >
              I&apos;m Airica Patiño,
              <Box component="span" sx={{ display: "block", color: "primary.main" }}>
                Full-Stack Developer
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                Based in Davao City, Philippines.
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 1.4,
                color: "text.secondary",
                lineHeight: { xs: 1.6, md: 1.8 },
                textAlign: "left",
                fontSize: { xs: "0.97rem", md: "1.02rem" },
              }}
            >
              I specialize in building practical, user-focused applications
              using Laravel, React, React Native, and MySQL. I focus on turning
              real operational workflows into reliable digital systems with
              clean interfaces, secure backend logic, and maintainable
              architecture.
            </Typography>
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
              Experience Summary
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
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Educational Background
            </Typography>
            <Grid container spacing={1.6}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    borderLeft: "2px solid #e53935",
                    pl: 2,
                    pb: 1.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#2a2e33" }}>
                    College
                  </Typography>
                  <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
                    Brokenshire College
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Bachelor of Science in Information Technology
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#5f6d7a", mt: 0.4 }}>
                    2020 - 2024
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    borderLeft: "2px solid #e53935",
                    pl: 2,
                    pb: 1.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#2a2e33" }}>
                    Secondary
                  </Typography>
                  <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
                    Brokenshire College
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>TVL - ICT</Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Madapo Hills, Davao City
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#5f6d7a", mt: 0.4 }}>
                    2018 - 2020
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Gov. Vicente Duterte National High School
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Durian St., NHA Bangkal, Davao City
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#5f6d7a", mt: 0.4 }}>
                    2014 - 2017
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    borderLeft: "2px solid #e53935",
                    pl: 2,
                    pb: 1.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#2a2e33" }}>
                    Primary
                  </Typography>
                  <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
                    Matina Central Elementary School
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Matina Crossing, Davao City
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#5f6d7a", mt: 0.4 }}>
                    2013 - 2014
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
