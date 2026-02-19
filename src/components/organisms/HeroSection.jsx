import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import SourceIcon from "@mui/icons-material/Source";

export default function HeroSection({ heroPhotoUrl, resumeUrl }) {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "grid",
        alignItems: "center",
        backgroundImage: `linear-gradient(110deg, rgba(8,14,26,0.82) 0%, rgba(8,14,26,0.66) 42%, rgba(8,14,26,0.5) 100%), url(${heroPhotoUrl})`,
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
            color: "#f8fafc",
          }}
        >
          Airica S. Patiño
        </Typography>
        <Typography
          sx={{
            mt: 1.2,
            fontSize: { xs: "1.1rem", md: "1.55rem" },
            color: "#f1f5f9",
          }}
        >
          Full-Stack Web Developer
        </Typography>
        <Typography
          sx={{
            mt: 2,
            maxWidth: 700,
            color: "rgba(241,245,249,0.92)",
            lineHeight: 1.8,
          }}
        >
          Building practical and user-friendly web experiences with a strong
          focus on clean UI, performance, and maintainable frontend-backend
          architecture.
        </Typography>
        <Box
          sx={{
            mt: 1.7,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            color: "#dcfce7",
            width: "fit-content",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#22c55e",
              boxShadow: "0 0 0 4px rgba(34,197,94,0.22)",
            }}
          />
          <Typography sx={{ fontWeight: 700, color: "#dcfce7" }}>
            Status: Available for work
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.4}
          sx={{ mt: 3, maxWidth: { xs: 280, sm: "none" } }}
        >
          <Button
            href="#portfolio"
            variant="contained"
            startIcon={<SourceIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 99,
              px: 2.8,
              py: 1.1,
              fontWeight: 600,
            }}
          >
            View Projects
          </Button>
          <Button
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            startIcon={<DownloadRoundedIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 99,
              px: 2.8,
              py: 1.1,
              fontWeight: 600,
              color: "white",
              borderColor: "rgba(255,255,255,0.7)",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
