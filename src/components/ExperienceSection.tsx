import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
}

function ExperienceItem({ title, company, period, description, isActive }: ExperienceItemProps) {
  return (
    <div className={cn(
      "relative pl-8 py-6 border-l transition-all",
      isActive 
        ? "border-primary" 
        : "border-border"
    )}>
      <div className={cn(
        "absolute left-0 top-7 w-3 h-3 rounded-full translate-x-[-50%] border-2",
        isActive 
          ? "bg-primary border-primary" 
          : "bg-background border-border"
      )} />
      
      <span className="block text-sm font-medium text-muted-foreground mb-1">
        {period}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground mb-3">{company}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = [
    {
      title: "experience.job1.title",
      company: "Philips",
      period: `${t("experience.job1.date")} ${t("experience.present")}`,
      description: "experience.job1.description",
      isActive: true,
    },
    {
      title: "experience.job2.title",
      company: "Dell Lead",
      period: "experience.job2.date",
      description: "experience.job2.description",
    },
    {
      title: "experience.job3.title",
      company: "GREat",
      period: "experience.job3.date",
      description: "experience.job3.description",
    },
    {
      title: "experience.job4.title",
      company: "SSPDS/CE",
      period: "experience.job4.date",
      description: "experience.job4.description",
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={t(exp.title)}
              company={exp.company}
              period={index === 0 ? exp.period : t(exp.period)}
              description={t(exp.description)}
              isActive={exp.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
