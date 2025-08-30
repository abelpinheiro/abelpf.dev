import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;  
  onClick: () => void;
}

function ProjectCard({ title, description, tags, imageUrl, onClick }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg cursor-pointer"
    onClick={onClick}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
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
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const allProjects = [
    {
      titleKey: "project.knowledgequiz.title",
      descriptionKey: "project.knowledgequiz.description",
      detailsKey: 'project.knowledgequiz.details',
      tags: ["Android", "Kotlin", "C#", ".NET", "PostgreSQL", "React"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "https://github.com/abelpinheiro/KnowledgeQuiz.Api",
      liveUrl: "https://knowledgequiz-web.pages.dev/",
    },
    {
      titleKey: "project.theroboticscompass.title",
      descriptionKey: "project.theroboticscompass.description",
      detailsKey: 'project.theroboticscompass.details',
      tags: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "https://github.com/abelpinheiro/the-robots-compass",
      liveUrl: "",
    },
    {
      titleKey: "project.remotemousecontrol.title",
      descriptionKey: "project.remotemousecontrol.description",
      detailsKey: 'project.remotemousecontrol.details',
      tags: ["Go", "Android", "Kotlin", "WebSocket"],
      imageUrl: "/abelpf.dev/project_remote_mouse_01.jpg",
      githubUrl: "https://github.com/abelpinheiro/mousephoneserver",
      liveUrl: "",
    },
    {
      titleKey: "project.onlinephotoshop.title",
      descriptionKey: "project.onlinephotoshop.description",
      detailsKey: 'project.onlinephotoshop.details',
      tags: [".NET", "React", "Python"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "",
      liveUrl: "",
    },
    {
      titleKey: "project.trackinglibrary.title",
      descriptionKey: "project.trackinglibrary.description",
      detailsKey: 'project.trackinglibrary.details',
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "https://github.com/abelpinheiro/TrackingLibraryApp",
      liveUrl: "",
    },
    {
      titleKey: "project.spaceinvaders.title",
      descriptionKey: "project.spaceinvaders.description",
      detailsKey: 'project.spaceinvaders.details',
      tags: [".NET"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "https://github.com/abelpinheiro/SpaceInvaders",
      liveUrl: "",
    },
    {
      titleKey: "project.3drec.title",
      descriptionKey: "project.3drec.description",
      detailsKey: 'project.3drec.details',
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
      githubUrl: "https://github.com/abelpinheiro/3d-reconstruct-app",
      liveUrl: "",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    
    // Scroll to section with slight delay to allow DOM update
    setTimeout(() => {
      if (sectionRef.current) {
        const offsetTop = sectionRef.current.offsetTop - 100; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleProjectClick = (project: typeof allProjects[0]) => {
    setSelectedProject(project);
  };

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
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleToggleShowAll}
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors",
              "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
          >
            {showAll ? t('projects.showLess') : t('projects.viewAll')}
          </button>
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
