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

    // Home Section
    'home.tagline': 'Software Developer',
    'home.title.static': 'Creating',
    'home.title.highlight': 'cool things',
    'home.subtitle': "I'm a software engineer passionate about designing scalable systems, crafting high-quality software, and exploring the intersection of technology, science, and engineering.",
    'home.button.work': 'View My Work',
    'home.button.contact': 'Contact Me',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': "Here you'll find more information about me, what I do, and my current skills in terms of programming and technology.",
    'about.gettoknowme.title': 'Get to know me!',
    'about.gettoknowme.p1.prefix': 'As a ',
    'about.gettoknowme.p1.worktitle': 'Backend Developer',
    'about.gettoknowme.p1.concattitles': ' and ',
    'about.gettoknowme.p1.graduationtitle': 'Computer Engineer',
    'about.gettoknowme.p1.maintext': ', I specialize in architecting robust and efficient systems with .NET, having maintained several projects. My approach to software is deeply influenced by my passion for complex problem-solving, which I\'m currently exploring further through a Master\'s degree in ',
    'about.gettoknowme.p1.mastersdegree.highlight': 'Autonomous Robotics.',
    'about.gettoknowme.p2.prefix': "I'm open to ",
    'about.gettoknowme.p2.jobopportunities.highlight': 'Job opportunities',
    'about.gettoknowme.p2.maintext': " where I can contribute, learn, and grow. If you have an opportunity that matches my skills and experience, don't hesitate to ",
    'about.gettoknowme.p2.contactme.highlight': 'contact me.',
    'about.gettoknowme.p3': "I thrive on bringing ideas to life, whether it's a personal electronics project or a large-scale distributed system. Outside of technology, my interests are diverse: I enjoy playing the violin, going to the gym, and studying math or physics.",
    'about.skills.title': 'My Skills',
    'about.contactme.button': "Contact Me",

    // Experience Section (New)
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My professional journey and the companies I\'ve had the pleasure to work with',
    'experience.present': 'Present',
    
    'experience.job1.date': 'Sep 2022 -', // Keep the dash, 'Present' is separate
    'experience.job1.title': 'Senior Software Developer',
    'experience.job1.company': 'Philips',
    'experience.job1.description': 'Developed and maintained IntelliSpace Critical Care and Anesthesia (ICCA), a Patient Data Management System used in hospitals across Europe, USA, and China. Reviewed security reports, mitigating vulnerabilities and ensuring compliance with healthcare security standards. Optimized database queries, reducing execution time and improving real-time data retrieval.',

    'experience.job2.date': 'May 2021 - Sep 2022',
    'experience.job2.title': '.NET Developer',
    'experience.job2.company': 'Dell Lead',
    'experience.job2.description': 'Developed APIs for a modernized version of the legacy Spare Parts Master Database (SPMD) and GSCV, redesigning and improving business rules using Clean Architecture and Domain-Driven Design.',

    'experience.job3.date': 'Jul 2020 - Apr 2021',
    'experience.job3.title': 'Backend Developer Intern',
    'experience.job3.company': 'GREat',
    'experience.job3.description': "Developed a middleware to integrate with Camunda's BPMN API, automating government processes such as ID issuance, reducing bureaucratic overhead and processing time. Designed and implemented web scraping scripts to collect options market data from B3, enabling data analysis and financial insights.",

    'experience.job4.date': 'May 2018 - Feb 2020',
    'experience.job4.title': 'Android Developer Intern',
    'experience.job4.company': 'SSPDS/CE',
    'experience.job4.description': 'Developed 911, a mobile application that integrated with state security systems, replacing phone-based emergency reporting with a digital solution.',

    
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

    // Footer (New)
    'footer.bio': 'A passionate engineer creating cool stuff.',
    'footer.contact.title': 'Contact',
    'footer.location': 'Location: Fortaleza, Ceará, Brazil',
    'footer.quicklinks.title': 'Quick Links',
  },
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.resume': 'Currículo',
    'nav.blogs': 'Blog',

    // Seção Home
    'home.tagline': 'Desenvolvedor de Software',
    'home.title.static': 'Criando',
    'home.title.highlight': 'coisas incríveis',
    'home.subtitle': 'Sou um engenheiro de software apaixonado por projetar sistemas escaláveis, criar software de alta qualidade e explorar a interseção entre tecnologia, ciência e engenharia.',
    'home.button.work': 'Ver Meus Projetos',
    'home.button.contact': 'Entre em Contato',

    // Seção Sobre
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Aqui você encontrará mais informações sobre mim, o que eu faço e minhas habilidades atuais em programação e tecnologia.',
    'about.gettoknowme.title': 'Conheça-me melhor!',
    'about.gettoknowme.p1.prefix': 'Como ',
    'about.gettoknowme.p1.worktitle': 'Desenvolvedor Backend',
    'about.gettoknowme.p1.concattitles': ' e ',
    'about.gettoknowme.p1.graduationtitle': 'Engenheiro da Computação',
    'about.gettoknowme.p1.maintext': ', especializo-me em arquitetar sistemas robustos e eficientes com .NET, tendo mantido diversos projetos. Minha abordagem para software é profundamente  influenciada pela minha paixão por resolver problemas complexos, algo que estou aprofundando através de um mestrado em ',
    'about.gettoknowme.p1.mastersdegree.highlight': 'Robótica Autônoma.',
    'about.gettoknowme.p2.prefix': 'Estou aberto a ',
    'about.gettoknowme.p2.jobopportunities.highlight': 'oportunidades de trabalho',
    'about.gettoknowme.p2.maintext': " onde possa contribuir, aprender e crescer. Se você tem uma oportunidade que corresponde às minhas habilidades e experiência, não hesite em entrar em ",
    'about.gettoknowme.p2.contactme.highlight': 'contato.',
    'about.gettoknowme.p3': 'Adoro dar vida a ideias, seja num projeto pessoal de eletrónica ou num sistema distribuído de grande escala. Fora da tecnologia, os meus interesses são diversos: gosto de tocar violino, fazer exercícios físicos e estudar matemática/física.',
    'about.skills.title': 'Minhas Habilidades',
    'about.contactme.button': "Me Contate",

    // Seção Experiência (Nova)
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Minha jornada profissional e as empresas com as quais tive o prazer de trabalhar',
    'experience.present': 'Atual',

    'experience.job1.date': 'Set 2022 -',
    'experience.job1.title': 'Desenvolvedor de Software Sênior',
    'experience.job1.company': 'Philips',
    'experience.job1.description': 'Desenvolvi e mantive o IntelliSpace Critical Care and Anesthesia (ICCA), um Sistema de Gerenciamento de Dados de Pacientes usado em hospitais na Europa, EUA e China. Revisei relatórios de segurança, mitigando vulnerabilidades e garantindo conformidade com os padrões de segurança em saúde. Otimizei consultas a bancos de dados, reduzindo o tempo de execução e melhorando a recuperação de dados em tempo real.',

    'experience.job2.date': 'Mai 2021 - Set 2022',
    'experience.job2.title': 'Desenvolvedor .NET',
    'experience.job2.company': 'Dell Lead',
    'experience.job2.description': 'Desenvolvi APIs para uma versão modernizada do banco de dados legado Spare Parts Master Database (SPMD) e GSCV, redesenhando e melhorando as regras de negócio usando Arquitetura Limpa e Domain-Driven Design.',

    'experience.job3.date': 'Jul 2020 - Abr 2021',
    'experience.job3.title': 'Estagiário de Desenvolvimento Backend',
    'experience.job3.company': 'GREat',
    'experience.job3.description': 'Desenvolvi um middleware para integrar com a API BPMN do Camunda, automatizando processos governamentais como emissão de identidade, reduzindo a sobrecarga burocrática e o tempo de processamento. Projetei e implementei scripts de web scraping para coletar dados do mercado de opções da B3, permitindo análise de dados e insights financeiros.',

    'experience.job4.date': 'Mai 2018 - Fev 2020',
    'experience.job4.title': 'Estagiário de Desenvolvimento Android',
    'experience.job4.company': 'SSPDS/CE',
    'experience.job4.description': 'Desenvolvi o 911, um aplicativo móvel que se integrava aos sistemas de segurança do estado, substituindo o reporte de emergências por telefone por uma solução digital.',

    
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
    'project.3drec.description': 'Um aplicativo Android que utiliza imagens e vídeos para criar o cenário em 3D.',

    // Rodapé (Novo)
    'footer.bio': 'Um engenheiro apaixonado por criar coisas incríveis.',
    'footer.contact.title': 'Contato',
    'footer.location': 'Localização: Fortaleza, Ceará, Brasil',
    'footer.quicklinks.title': 'Links Rápidos',
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