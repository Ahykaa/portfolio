import { AppBar, Link, Toolbar } from "@mui/material";

export default function MobileNavBar({ navItems }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.92)",
        borderBottom: "1px solid rgba(39,40,41,0.1)",
        display: "none",
      }}
    >
      <Toolbar sx={{ gap: 2, overflowX: "auto", py: 0.5 }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            underline="none"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {item.label}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
