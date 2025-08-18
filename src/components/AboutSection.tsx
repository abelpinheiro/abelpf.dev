import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const skills = [
    "C#", ".NET", "Java", "Spring",
    "SQL", "AWS", "Redis", "Docker", 
    "CI/CD", "RabbitMQ", "Elasticsearch"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">{t('about.gettoknowme.title')}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('about.gettoknowme.p1.prefix')}<strong>{t('about.gettoknowme.p1.worktitle')}</strong> {t('about.gettoknowme.p1.concattitles')} <strong>{t('about.gettoknowme.p1.graduationtitle')}</strong> {t('about.gettoknowme.p1.maintext')} <strong>{t('about.gettoknowme.p1.mastersdegree.highlight')}</strong>.
              </p>
              <p>
                {t('about.gettoknowme.p2.prefix')}<strong>{t('about.gettoknowme.p2.jobopportunities.highlight')}</strong> {t('about.gettoknowme.p2.maintext')} <strong>{t('about.gettoknowme.p2.contactme.highlight')}</strong>.  
              </p>
              <p>
                {t('about.gettoknowme.p3')}
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors",
                  "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              >
                {t('about.contactme.button')}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('about.skills.title')}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-background rounded-md text-sm font-medium border border-border/50 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
