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
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Philips",
      period: "Sep 2022 - Present",
      description: "Developed and maintained IntelliSpace Critical Care and Anesthesia (ICCA), a Patient Data Management System used in hospitals across Europe, USA, and China. Reviewed security reports, mitigating vulnerabilities and ensuring compliance with healthcare security standards. Optimized database queries, reducing execution time and improving real-time data retrieval.",
      isActive: true,
    },
    {
      title: ".NET Developer",
      company: "Dell Lead",
      period: "May 2021 - Sep 2022",
      description: "Developed APIs for a modernized version of the legacy Spare Parts Master Database (SPMD) and GSCV, redesigning and improving business rules using Clean Architecture and Domain-Driven Design.",
    },
    {
      title: "Backend Developer Intern",
      company: "GREat",
      period: "Jul 2020 - Apr 2021",
      description: "Developed a middleware to integrate with Camunda’s BPMN API, automating government processes such as ID issuance, reducing bureaucratic overhead and processing time. Designed and implemented web scraping scripts to collect options market data from B3, enabling data analysis and financial insights.",
    },
    {
      title: "Android Developer Intern",
      company: "SSPDS/CE",
      period: "May 2018 - Feb 2020",
      description: "Developed 190, a mobile application that integrated with state security systems, replacing phone-based emergency reporting with a digital solution.",
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isActive={exp.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
