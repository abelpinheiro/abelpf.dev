import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, Copy, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const contactInfo = {
    email: "abelpinheiro95@gmail.com",
    location: "Fortaleza, Brazil",
    linkedin: "https://www.linkedin.com/in/abel-pinheiro/",
    github: "https://github.com/abelpinheiro",
    orcid: "https://orcid.org/0000-0002-1521-6926"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('contactme.copy'));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{t('contactme.title')}</DialogTitle>
          <p className="text-sm text-muted-foreground">{t('contactme.subtitle')}</p>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          {/* Email */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/30">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t('contactme.email')}</p>
                <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(contactInfo.email)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/30">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t('contactme.location')}</p>
                <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Social & Professional</h4>
            
            {/* LinkedIn */}
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/30">
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{t('contactme.linkedin')}</p>
                  <p className="text-sm text-muted-foreground">Professional Profile</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(contactInfo.linkedin, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/30">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{t('contactme.github')}</p>
                  <p className="text-sm text-muted-foreground">Code Repository</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(contactInfo.github, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            {/* ORCID */}
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/30">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{t('contactme.orcid')}</p>
                  <p className="text-sm text-muted-foreground">Research Profile</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(contactInfo.orcid, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}