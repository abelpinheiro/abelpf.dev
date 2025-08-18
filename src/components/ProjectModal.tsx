import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
      titleKey: string;
      descriptionKey: string;
      tags: string[];
      imageUrl: string;
      detailsKey?: string;
      githubUrl?: string;
      liveUrl?: string;
    } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { t } = useLanguage();

  if(!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t(project.titleKey)}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t(project.descriptionKey)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-lg border">
            <img
              src={project.imageUrl} 
              alt={t(project.titleKey)}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Project Details */}
          {project.detailsKey && (
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('project.details')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(project.detailsKey)}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('project.technologies')}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {project.githubUrl && (
              <Button asChild className="flex-1">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  {t('project.viewCode')}
                </a>
              </Button>
            )}
            
            {project.liveUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('project.viewLive')}
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
