import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={340}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      titleKey: "project.knowledgequiz.title",
      descriptionKey: "project.knowledgequiz.description",
      tags: ["Android", "Kotlin", "C#", ".NET", "PostgreSQL", "React"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.robotics101.title",
      descriptionKey: "project.robotics101.description",
      tags: [".NET", "C#"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.onlinephotoshop.title",
      descriptionKey: "project.onlinephotoshop.description  ",
      tags: [".NET", "React", "Python"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.remotemousecontrol.title",
      descriptionKey: "project.remotemousecontrol.description",
      tags: [".NET", "Android", "Kotlin", "WebSocket"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.trackinglibrary.title",
      descriptionKey: "project.trackinglibrary.description",
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.spaceinvaders.title",
      descriptionKey: "project.spaceinvaders.description",
      tags: [".NET"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      titleKey: "project.3drec.title",
      descriptionKey: "project.3drec.description",
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors",
              "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
          >
            {showAll ? t('projects.showLess') : t('projects.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
