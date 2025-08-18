import { cn } from "@/lib/utils";

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
  const projects = [
    {
      title: "KnowledgeQuiz",
      description: "A full-featured quiz system where users can manage new quizes in the web and play them on an app.",
      tags: ["Android", "Kotlin", "C#", ".NET", "PostgreSQL", "React"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "Robotics 101 - Path Planning",
      description: "An interactive website to show the different algorithms and strategies of Path Planning in robotics.",
      tags: [".NET", "C#"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "DIP/CV 101 - Online Photoshop",
      description: "An interactive website showcasing algorithms of Digital Image Processing and Computer Vision.",
      tags: [".NET", "React", "Python"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "Remote Mouse Control",
      description: "A desktop application and an Android app that will allow the smartphone to connect to the computer and act as a mouse remotely",
      tags: [".NET", "Android", "Kotlin", "WebSocket"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "Tracking Library System",
      description: "An Android app where the user can create its own collection libraries (games, books) and manage them.",
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "Space Invaders Game",
      description: "A clone of Space Invaders",
      tags: [".NET"],
      imageUrl: "https://placehold.co/600x340",
    },
    {
      title: "3D Image Reconstruction",
      description: "An Android app that takes images and videos and creates the 3d scenary",
      tags: ["Android", "Kotlin"],
      imageUrl: "https://placehold.co/600x340",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors",
              "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
