import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
    images: string[];
    objectFit?: 'contain' | 'cover';
    className?: string; 
}

export function Carousel({ images, objectFit = 'cover', className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  if (!images || images.length === 0) {
    return (
      <div className={cn("relative h-full w-full bg-muted flex items-center justify-center", className)}>
        <p className="text-muted-foreground">No image</p>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full group/carousel", className)}>
      <div className="h-full w-full overflow-hidden rounded-lg">
         <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className={cn(
            "h-full w-full transition-opacity duration-300",
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          )}
        />
      </div>

      {/* Botões de Navegação */}
      {images.length > 1 && (
        <>
           <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      
      {/* Indicadores (Pontos) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        'h-2 w-2 rounded-full transition-all duration-300',
                        currentIndex === index ? 'bg-white scale-125 shadow-md' : 'bg-white/60'
                    )}
                />
            ))}
        </div>
      )}
    </div>
  )
}
