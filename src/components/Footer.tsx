import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {  
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Abel Pinheiro de Figueiredo</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.bio')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: abelpinheiro95@gmail.com</li>
              <li>{t('footer.location')}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quicklinks.title')}</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Experience", "Projects", "Resume", "Blogs"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Abel Pinheiro de Figueiredo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
