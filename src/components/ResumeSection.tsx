import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ResumeSection() {
  const { t } = useLanguage();

  const handleDownloadResume = () => {
    // Create download link for PDF
    const element = document.createElement('a');
    element.href = '/resume_abelpf.pdf';
    element.download = 'resume_abelpf.pdf';
    element.target = '_blank';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const educationItems = [
    {
      degreeKey: 'resume.education.n1' ,
      institutionKey: "resume.education.institution.n1",
      period: "2025 - 2027",
    },
    {
      degreeKey: "resume.education.n2",
      institutionKey: "resume.education.institution.n1",
      period: "2017 - 2022",
    },
  ];

  const certifications = [
    "AWS Certified Associate Developer",
    "TOEFL itp"
  ];
  
  return (
    <section id="resume" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('resume.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('resume.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('resume.education.title')}</h3>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="pb-4 border-b border-border/50">
                  <h4 className="text-lg font-medium">{t(item.degreeKey)}</h4>
                  <p className="text-muted-foreground">{t(item.institutionKey)}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('resume.certifications.title')}</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleDownloadResume}
            className={cn(
              "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors",
              "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
            )}
          >
            <Download className="h-5 w-5 mr-2" />
            {t('resume.pdf.download')}
          </button>
        </div>
      </div>
    </section>
  )
}
