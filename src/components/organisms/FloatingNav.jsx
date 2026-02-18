import { Box, Link, Paper, Stack } from "@mui/material";

export default function FloatingNav({ navItems }) {
  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 12, md: 18, lg: 22 },
        top: { xs: "42%", md: "50%" },
        transform: "translateY(-50%)",
        zIndex: 20,
        display: { xs: "block", lg: "block" },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 0,
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Stack spacing={0.8} sx={{ alignItems: "flex-end" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                underline="none"
                aria-label={item.label}
                sx={{
                  width: { xs: 42, lg: 44 },
                  height: { xs: 42, lg: 44 },
                  borderRadius: 99,
                  display: "inline-flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  alignSelf: "flex-end",
                  gap: 1,
                  px: 1.45,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  color: "#45505b",
                  bgcolor: "#f2f3f5",
                  transition: "all 220ms ease",
                  "& .nav-label": {
                    maxWidth: 0,
                    opacity: 0,
                    fontSize: "0.98rem",
                    fontWeight: 500,
                    mr: 0,
                    transition: "all 220ms ease",
                  },
                  "&:hover": {
                    width: { lg: 158 },
                    bgcolor: { lg: "primary.main" },
                    color: { lg: "white" },
                  },
                  "&:hover .nav-label": {
                    maxWidth: { lg: 92 },
                    opacity: { lg: 1 },
                    mr: { lg: 1 },
                  },
                }}
              >
                <Icon fontSize="small" />
                <Box component="span" className="nav-label">
                  {item.label}
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Paper>
    </Box>
  );
}
