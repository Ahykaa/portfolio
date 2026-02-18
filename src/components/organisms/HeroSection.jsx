import { Box, Container, Typography } from "@mui/material";

export default function HeroSection({ heroPhotoUrl }) {
  return (
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
          Full-Stack Web Developer
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
      </Container>
    </Box>
  );
}
