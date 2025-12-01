import React, { useState } from "react";
import "./App.css";

const navItems = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const featuredProjects = [
  {
    title: "Promotional landing page for our favorite show",
    tag: "Conceptual Work",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show. Delivered a fully responsive design with dynamic content capabilities and a newsletter feature.",
    year: "2023",
    role: "Front-end Developer",
    client: "Adventure Time",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "News platform redesign",
    tag: "Client Work",
    description:
      "Redesigned a news portal to modernize typography, elevate readability, and improve the way stories surface on mobile devices.",
    year: "2022",
    role: "Front-end Developer",
    client: "World News",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "E-commerce product page",
    tag: "Challenge",
    description:
      "Crafted a product experience featuring a lightbox gallery, variant controls, and clean cart interactions to highlight product photography.",
    year: "2022",
    role: "Front-end Developer",
    client: "SneakPeak",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
  { label: "GitHub", href: "https://github.com", icon: "gh" },
  { label: "Email", href: "mailto:airicaptn24@gmail.com", icon: "mail" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "ig" },
];

export default function App() {
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitStatus("sent");
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100">
      <div className="bg-grid" aria-hidden />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <header className="flex items-center justify-between py-8">
          <a href="#hero" className="brand">
            Airica S. Patiño
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="space-y-20">
          <section
            id="hero"
            className="grid lg:grid-cols-2 gap-12 items-center rounded-[28px] border border-white/5 bg-[rgba(9,12,12,0.9)] p-10 shadow-[0_35px_80px_-45px_rgba(0,0,0,0.85)]"
          >
            <div className="space-y-8">
              <p className="text-accent text-sm uppercase tracking-[0.3em]">
                Portfolio
              </p>
              <div>
                <p className="text-5xl sm:text-6xl font-display leading-none">
                  Hi, I am
                </p>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-display leading-none">
                  Airica S. Patiño
                </h1>
              </div>
              <p className="max-w-xl text-lg sm:text-xl text-slate-300 leading-relaxed">
                A Philippine-based full-stack web developer passionate about
                building accessible and user-friendly websites.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="button-primary"
                >
                  Contact Me
                </a>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <SocialIcon type="in" />
                  <SocialIcon type="gh" />
                  <SocialIcon type="mail" />
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
                <img
                  src="/aic.jpg"
                  alt="Airica in graduation gown"
                  className="h-full w-full object-cover rounded-[22px]"
                />

            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div>
                <p className="eyebrow">Featured Projects</p>
                <h2 className="section-title">Selected work</h2>
                <p className="text-slate-300 max-w-2xl">
                  Here are some of the selected projects that showcase my passion for
                  front-end development.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="project-row"
                >
                  <div className="project-image">
                    <span className="project-pill">{project.tag}</span>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-[18px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm border-t border-b border-white/5 py-4">
                      <div>
                        <p className="text-slate-500">Project info</p>
                        <p className="text-white">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Year</p>
                        <p className="text-white">{project.year}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Role</p>
                        <p className="text-white">{project.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-accent">
                      <a href={project.liveUrl} className="underline underline-offset-4">
                        Live demo ↗
                      </a>
                      <a href={project.githubUrl} className="underline underline-offset-4">
                        See on GitHub ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 border-t border-b border-white/5 py-12"
          >
            <div className="space-y-2">
              <p className="eyebrow">About me</p>
              <h2 className="section-title">Hi! I&apos;m a Junior Full-Stack Developer from the Philippines.</h2>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Hi! I&apos;m a Junior Full-Stack Developer from the Philippines. I earned my
                Bachelor&apos;s degree in Information Technology and discovered a real love
                for creating web apps. My main stack is Laravel for backend and React.js for
                frontend — I enjoy combining the power of both to bring ideas to life.
              </p>
              <p>
                I&apos;m constantly learning, experimenting, and improving my craft. Whether
                it&apos;s building new features or solving tricky bugs, I&apos;m always excited
                to grow as a developer.
              </p>
              <a href="#contact" className="underline underline-offset-4 text-accent font-semibold">
                More about me ↗
              </a>
            </div>
          </section>

          <section
            id="contact"
          >
            <div className="space-y-4">
              <p className="eyebrow">Let&apos;s connect</p>
              <h2 className="section-title">Say hello at patino.airica@gmail.com</h2>
              <p className="text-slate-300">
                For more info, here&apos;s my{" "}
                <a href="/resume.pdf" className="underline underline-offset-4 text-accent font-semibold">
                  resume
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="icon-button"
                    aria-label={link.label}
                  >
                    <SocialIcon type={link.icon} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-500 pt-6">
                © 2024 Airica S. Patiño
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid sm:grid-cols-2 gap-3">
                <Input label="Name" name="name" placeholder="John Doe" required />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <Input label="Subject" name="subject" placeholder="Let’s collaborate" />
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input-field min-h-[160px]"
                  placeholder="Tell me about the project or role you have in mind."
                  required
                />
              </div>
              <button type="submit" className="button-primary">
                {submitStatus === "sending" ? "Sending..." : "Submit"}
              </button>
              {submitStatus === "sent" && (
                <p className="text-sm text-accent">Thanks! Your message was sent.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
              )}
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

function SocialIcon({ type }) {
  if (type === "in") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.11h4.56V24H.22zM8.24 8.11h4.37v2.17h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.76v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.49V24H8.24z" />
      </svg>
    );
  }

  if (type === "gh") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.33-1.78-1.33-1.78-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.64.24 2.86.12 3.16.78.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.66-5.49 5.96.43.37.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.28 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M2 5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h20c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H2zm0-2h20c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3H2c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zm2.5 6.13 7.5 4.6 7.5-4.6 1.04 1.7-8.54 5.24-8.54-5.24 1.04-1.7z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 2.2c2.12 0 2.38.01 3.22.05.83.04 1.39.17 1.87.35.51.2.94.47 1.37.9.43.43.7.86.9 1.37.18.48.31 1.04.35 1.87.04.84.05 1.1.05 3.22s-.01 2.38-.05 3.22c-.04.83-.17 1.39-.35 1.87-.2.51-.47.94-.9 1.37-.43.43-.86.7-1.37.9-.48.18-1.04.31-1.87.35-.84.04-1.1.05-3.22.05s-2.38-.01-3.22-.05c-.83-.04-1.39-.17-1.87-.35a3.53 3.53 0 0 1-1.37-.9 3.53 3.53 0 0 1-.9-1.37c-.18-.48-.31-1.04-.35-1.87-.04-.84-.05-1.1-.05-3.22s.01-2.38.05-3.22c.04-.83.17-1.39.35-1.87.2-.51.47-.94.9-1.37.43-.43.86-.7 1.37-.9.48-.18 1.04-.31 1.87-.35.84-.04 1.1-.05 3.22-.05zm0-2.2C9.84 0 9.54 0 8.7.05 7.86.09 7.21.23 6.62.45c-.62.23-1.16.54-1.69 1.07-.53.53-.84 1.07-1.07 1.69-.22.59-.36 1.24-.4 2.08C3.41 6.13 3.4 6.43 3.4 8.6v6.8c0 2.17.01 2.47.05 3.32.04.84.18 1.49.4 2.08.23.62.54 1.16 1.07 1.69.53.53 1.07.84 1.69 1.07.59.22 1.24.36 2.08.4.84.04 1.14.05 3.31.05s2.47-.01 3.32-.05c.84-.04 1.49-.18 2.08-.4.62-.23 1.16-.54 1.69-1.07.53-.53.84-1.07 1.07-1.69.22-.59.36-1.24.4-2.08.04-.84.05-1.14.05-3.31V8.6c0-2.17-.01-2.47-.05-3.32-.04-.84-.18-1.49-.4-2.08-.23-.62-.54-1.16-1.07-1.69-.53-.53-1.07-.84-1.69-1.07-.59-.22-1.24-.36-2.08-.4C14.47.01 14.17 0 12 0z" />
    </svg>
  );
}

function Input({ label, placeholder, name, type = "text", required }) {
  const inputId = name || (label ? label.replace(/\s+/g, "-").toLowerCase() : "input");
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-white" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="input-field"
        placeholder={placeholder}
        name={name || inputId}
        type={type}
        required={Boolean(required)}
      />
    </div>
  );
}
