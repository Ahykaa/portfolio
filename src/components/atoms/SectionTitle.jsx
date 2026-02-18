import { Box, Typography } from "@mui/material";

export default function SectionTitle({ title, description }) {
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
