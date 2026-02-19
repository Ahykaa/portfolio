import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionTitle from "../atoms/SectionTitle";
import { useState } from "react";

export default function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState("");

  const contactItems = [
    {
      title: "Email",
      value: "patino.airica@gmail.com",
      displayValue: "patino.airica@gmail.com",
      copyValue: "patino.airica@gmail.com",
      href: "mailto:patino.airica@gmail.com",
      icon: EmailRoundedIcon,
    },
    {
      title: "Mobile",
      value: "0936-601-8072",
      displayValue: "0936-601-8072",
      copyValue: "09366018072",
      href: "tel:09366018072",
      icon: PhoneAndroidRoundedIcon,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/airicapatino",
      displayValue: "linkedin.com/in/airicapatino",
      copyValue: "https://www.linkedin.com/in/airicapatino",
      href: "https://www.linkedin.com/in/airicapatino",
      icon: LinkedInIcon,
    },
    {
      title: "GitHub",
      value: "github.com/Ahykaa",
      displayValue: "github.com/Ahykaa",
      copyValue: "https://github.com/Ahykaa",
      href: "https://github.com/Ahykaa",
      icon: GitHubIcon,
    },
  ];

  const handleCopy = async (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(item.copyValue ?? item.value);
      setCopiedLabel(item.title);
    } catch {
      setCopiedLabel("");
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundImage:
          "linear-gradient(180deg, #f7fbff 0%, #edf5ff 55%, #e7f0ff 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 3, sm: 4, md: 6 } }}
      >
        <SectionTitle
          title="Contact Me"
          description="Let us work together on your next web project."
        />
        <Grid container spacing={2.2}>
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} md={4} key={item.title}>
                <Paper
                  component={Link}
                  href={item.href}
                  target={item.title === "Email" ? undefined : "_blank"}
                  rel={item.title === "Email" ? undefined : "noreferrer"}
                  underline="none"
                  sx={{
                    p: 2.4,
                    height: "100%",
                    display: "block",
                    borderRadius: 3,
                    border: "1px solid rgba(229,57,53,0.16)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,251,255,0.95) 100%)",
                    transition:
                      "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 28px rgba(229,57,53,0.16)",
                      borderColor: "rgba(229,57,53,0.45)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(229,57,53,0.1)",
                        color: "primary.main",
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: "#1f2937" }}>
                      {item.title}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    sx={{ mt: 1.1 }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.95rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {item.displayValue ?? item.value}
                    </Typography>
                    <IconButton
                      size="small"
                      aria-label={`Copy ${item.title}`}
                      onClick={(event) => handleCopy(event, item)}
                      sx={{
                        color: "primary.main",
                        bgcolor: "rgba(229,57,53,0.09)",
                        "&:hover": { bgcolor: "rgba(229,57,53,0.16)" },
                      }}
                    >
                      <ContentCopyRoundedIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Snackbar
          open={Boolean(copiedLabel)}
          autoHideDuration={1600}
          onClose={() => setCopiedLabel("")}
          message={copiedLabel ? `${copiedLabel} copied` : ""}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </Box>
  );
}
