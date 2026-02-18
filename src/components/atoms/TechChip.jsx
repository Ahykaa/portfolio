import { Chip } from "@mui/material";

export default function TechChip({ label }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        height: 22,
        fontSize: "0.7rem",
        fontWeight: 600,
        bgcolor: "rgba(229,57,53,0.1)",
        color: "#b71c1c",
      }}
    />
  );
}
