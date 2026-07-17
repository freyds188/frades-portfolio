import {
  ArrowRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Gitlab,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send
} from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/data/image/portfolio-wallpaper.jpg";
import {
  certificates,
  education,
  experiences,
  profile,
  projects,
  repositories,
  skills
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Repositories />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] scroll-mt-24 items-center pt-20"
    >
      <Image
        src={heroImage}
        alt="Developer workspace with code editor"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/82 dark:bg-background/86" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn>
          <p className="mb-4 inline-flex rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Available for backend, mobile, and junior software roles
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-primary sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl}>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Backend Development", "REST APIs, databases, auth, reporting systems"],
              ["Mobile Development", "Flutter and React Native app experiences"],
              ["Web Development", "React, Next.js, JavaScript, HTML, CSS"],
            ].map(([title, text]) => (
              <Card key={title}>
                <CardContent>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Fresh graduate with a practical engineering mindset."
      description="I am a fresh graduate passionate about backend development and Flutter, with hands-on experience building web systems, mobile applications, and data-driven academic projects."
    >
      <FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          {["API design", "Mobile app development", "Database-driven systems"].map(
            (item) => (
              <Card key={item}>
                <CardContent className="flex items-center gap-3">
                  <Code2 className="size-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </FadeIn>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical stack organized for real project work."
      description="These placeholders are grouped so you can quickly update the portfolio as your stack grows."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <FadeIn key={category} delay={index * 0.05}>
            <Card className="h-full">
              <CardContent>
                <h3 className="font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Projects"
      description=""
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A concise timeline across internship and academic project work."
    >
      <div className="relative mx-auto max-w-3xl space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:left-5">
        {experiences.map((experience, index) => (
          <FadeIn key={experience.label} delay={index * 0.06}>
            <div className="relative pl-12 sm:pl-16">
              <span className="absolute left-[11px] top-6 size-3 rounded-full bg-primary ring-4 ring-background sm:left-[15px]" />
              <Card className="transition hover:-translate-y-1 hover:border-primary/60">
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge>{experience.label}</Badge>
                      <h3 className="mt-3 text-xl font-semibold">
                        {experience.title}
                      </h3>
                    </div>
                    <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <FadeIn>
        <Card>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 size-6 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="mt-1 text-muted-foreground">{education.university}</p>
              </div>
            </div>
            <Badge>Graduation Year: {education.graduationYear}</Badge>
          </CardContent>
        </Card>
      </FadeIn>
    </Section>
  );
}

function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Optional credentials and learning milestones."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <FadeIn key={certificate.name} delay={index * 0.06}>
            <Card>
              <CardContent>
                <h3 className="font-semibold">{certificate.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {certificate.issuer} · {certificate.year}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Repositories() {
  return (
    <Section
      id="repositories"
      eyebrow="Repository Links"
      title="Code repositories across GitHub, GitLab, and other sources."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {repositories.map((repository, index) => (
          <FadeIn key={repository.name} delay={index * 0.06}>
            <Card className="h-full transition hover:-translate-y-1 hover:border-primary/60">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{repository.name}</h3>
                  <Badge>{repository.source}</Badge>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {repository.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {repository.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <a href={repository.url} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" />
                    Open Repository
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Ready to talk about backend, mobile, or junior software roles."
      description="Use the placeholders below for your real links and connect the form to your preferred service later."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <Card>
            <CardContent className="space-y-5">
              {[
                [Mail, profile.email, `mailto:${profile.email}`],
                [Github, "GitHub", profile.github],
                [Linkedin, "LinkedIn", profile.linkedin],
                [MapPin, "Philippines", "#"]
              ].map(([Icon, label, href]) => (
                <a
                  key={String(label)}
                  href={String(href)}
                  className="flex items-center gap-3 rounded-md border border-border/60 p-3 transition hover:border-primary/60 hover:bg-secondary/60"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="text-sm">{String(label)}</span>
                </a>
              ))}
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.08}>
          <Card>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    aria-label="Name"
                    placeholder="Aldrin Frades"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                  />
                  <input
                    aria-label="Email"
                    type="email"
                    placeholder="Email address"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                  />
                </div>
                <input
                  aria-label="Subject"
                  placeholder="Subject"
                  className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                />
                <textarea
                  aria-label="Message"
                  placeholder="Message"
                  rows={5}
                  className="rounded-md border border-input bg-background px-3 py-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                />
                <Button type="button" className="w-full sm:w-fit">
                  <Send className="size-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
      <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © 2026 {profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
      </footer>
    </Section>
  );
}
