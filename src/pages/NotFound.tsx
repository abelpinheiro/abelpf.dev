import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { Home, ArrowLeft } from 'lucide-react';

function NotFound() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() =>{
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 py-12 max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">{t('notfound.title')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('notfound.description')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            {t('notfound.goHome')}
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('notfound.goBack')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound