"use client";

import { Expand, ExternalLink, Github, Images, PlayCircle, X } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <Card className="group flex h-full min-h-[34rem] flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/60">
        <div className="relative aspect-video overflow-hidden bg-secondary/60 p-3">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <CardContent className="flex flex-1 flex-col gap-5">
          <div>
            <p className="text-sm font-medium text-primary">{project.role}</p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.githubUrl ? (
              <Button asChild variant="outline" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button asChild size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </Button>
            ) : null}
            {project.showScreenshots !== false && project.screenshots.length > 0 ? (
              <GalleryDialog project={project} />
            ) : null}
            {project.demoVideoUrl ? <VideoDialog project={project} /> : null}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

function GalleryDialog({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [fullViewIndex, setFullViewIndex] = useState<number | null>(null);
  const fullViewScreenshot =
    fullViewIndex === null ? null : project.screenshots[fullViewIndex];

  return (
    <>
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        <Images className="size-4" />
        Screenshots
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${project.title} screenshots`}
        description="Select any screenshot to inspect it in full view."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {project.screenshots.map((screenshot, screenshotIndex) => (
            <button
              type="button"
              key={`${project.title}-screenshot-${screenshotIndex}`}
              className="group/image relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary/60 p-2 text-left transition hover:border-primary/70"
              onClick={() => setFullViewIndex(screenshotIndex)}
            >
              <Image
                src={screenshot}
                alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                fill
                className="object-contain p-2"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-soft backdrop-blur transition group-hover/image:opacity-100">
                <Expand className="size-3.5" />
                Full View
              </span>
            </button>
          ))}
        </div>
      </Modal>
      <Modal
        open={fullViewScreenshot !== null}
        onClose={() => setFullViewIndex(null)}
        title={`${project.title} full screenshot`}
        description="Full-size preview of the selected project screenshot."
        size="compact"
      >
        {fullViewScreenshot ? (
          <div className="relative h-[42vh] min-h-[18rem] overflow-hidden rounded-lg border border-border bg-secondary/60 sm:h-[52vh]">
            <Image
              src={fullViewScreenshot}
              alt={`${project.title} full screenshot`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}

function VideoDialog({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <PlayCircle className="size-4" />
        Demo Video
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${project.title} demo video`}
        description="This private project demo is embedded directly in the portfolio."
      >
        <div className="mt-5 overflow-hidden rounded-lg border border-border bg-secondary">
          <video
            className="aspect-video w-full"
            controls
            preload="metadata"
            src={project.demoVideoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </>
  );
}

function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "default"
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
  size?: "default" | "compact";
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[92vh] w-full overflow-y-auto rounded-lg border border-border bg-background p-4 shadow-soft sm:p-5 ${
          size === "compact" ? "max-w-3xl" : "max-w-5xl"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          <X className="size-4" />
        </button>
        <h3 id="project-modal-title" className="pr-10 text-lg font-semibold sm:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 pr-10 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
