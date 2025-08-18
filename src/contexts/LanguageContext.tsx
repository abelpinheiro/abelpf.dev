import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.blogs': 'Blogs',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work and personal projects',
    'projects.viewAll': 'View All Projects',
    'projects.showLess': 'Show Less',
    
    // Project Cards
    'project.knowledgequiz.title': 'KnowledgeQuiz Platform',
    'project.knowledgequiz.description': 'A full-featured quiz system with quiz management and analytics in the web and an Android app quiz game.',
    'project.robotics101.title': 'Robotics 101 - Path Planning',
    'project.robotics101.description': 'An interactive website to show the different algorithms and strategies of Path Planning in robotics.',
    'project.onlinephotoshop.title': 'DIP/CV 101 - Online Photoshop',
    'project.onlinephotoshop.description': 'An interactive website showcasing algorithms of Digital Image Processing and Computer Vision.',
    'project.remotemousecontrol.title': 'Remote Mouse Control',
    'project.remotemousecontrol.description': 'A desktop application and an Android app that will allow the smartphone to connect to the computer and act as a mouse remotely.',
    'project.trackinglibrary.title': 'Tracking Library System',
    'project.trackinglibrary.description': 'An Android app where the user can create its own collection libraries (games, books) and manage them.',
    'project.spaceinvaders.title': 'Space Invaders Game',
    'project.spaceinvaders.description': 'A clone of Space Invaders.',
    'project.3drec.title': '3D Image Reconstruction',
    'project.3drec.description': 'An Android app that takes images and videos and creates the 3d scenary.',
  },
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.resume': 'Currículo',
    'nav.blogs': 'Blog',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Uma seleção dos meus trabalhos recentes e projetos pessoais',
    'projects.viewAll': 'Ver Todos os Projetos',
    'projects.showLess': 'Mostrar Menos',
    
    // Project Cards
    'project.knowledgequiz.title': 'Plataforma KnowledgeQuiz',
    'project.knowledgequiz.description': 'Um sistema de quiz completo com gerenciamento, análise de dados na web e um jogo de quiz em aplicativo para Android.',
    'project.robotics101.title': 'Robótica 101 - Planejamento de Navegação',
    'project.robotics101.description': 'Um site interativo para demonstrar os diferentes algoritmos e estratégias de Planejamento de Trajetória em robótica.',
    'project.onlinephotoshop.title': 'PDI/VC 101 - Photoshop Online',
    'project.onlinephotoshop.description': 'Um site interativo que apresenta algoritmos de Processamento Digital de Imagens e Visão Computacional.',
    'project.remotemousecontrol.title': 'Controle Remoto de Mouse',
    'project.remotemousecontrol.description': 'Uma aplicação para desktop e um app para Android que permitem ao smartphone conectar-se ao computador e funcionar como um mouse remoto.',
    'project.trackinglibrary.title': 'Sistema Gerenciador de Coleções',
    'project.trackinglibrary.description': 'Um aplicativo Android onde o usuário pode criar suas próprias coleções (de jogos, livros, etc.) e gerenciá-las.',
    'project.spaceinvaders.title': 'Space Invaders',
    'project.spaceinvaders.description': 'Um clone do jogo Space Invaders.',
    'project.3drec.title': 'Reconstrução de Imagem 3D',
    'project.3drec.description': 'Um aplicativo Android que utiliza imagens e vídeos para criar o cenário em 3D.'
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'pt'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}