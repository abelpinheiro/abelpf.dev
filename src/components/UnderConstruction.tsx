import { Construction, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext';

interface UnderConstructionProps {
    title?: string;
    description?: string;
    className?: string;
}

export function UnderConstruction({
    title,
    description,
    className = ""
}: UnderConstructionProps) {
    const { t } = useLanguage();
    
  return (
    <div className={`section-padding ${className}`}>
        <div className="container">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8">
                    <div className="relative inline-block">
                        <Construction className='h-16 w-16 text-primary mx-auto mb-4' />
                        <Clock className="h-6 w-6 text-secondary absolute -top-1 -right-1 animate-pulse" />
                    </div>
                </div>

                <h2 className="section-title">
                    {title || t('underConstruction.title')}
                </h2>

                <p className="section-subtitle mx-auto">
                    {description || t('underConstruction.description')}
                </p>

                <div className="mt-8">
                    <div className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-secondary-foreground">
                        <Clock className='h-4 w-4 mr-2 animate-pulse' />
                        {t('underConstruction.status')}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
