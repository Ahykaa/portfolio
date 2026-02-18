import { IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export default function SocialLinks() {
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 2.6 }}>
      <IconButton
        component="a"
        href="mailto:patino.airica@gmail.com"
        sx={{ color: "#45505b" }}
      >
        <MailOutlineRoundedIcon />
      </IconButton>
      <IconButton component="a" href="#" sx={{ color: "#45505b" }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton component="a" href="#" sx={{ color: "#45505b" }}>
        <GitHubIcon />
      </IconButton>
    </Stack>
  );
}
