import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.success': 'Casos de Éxito',
    'nav.about': 'Quiénes Somos',
    'nav.cta': 'Evalúa tu Beca GRATIS',
    
    // Hero
    'hero.title': 'Cumple tu sueño de jugar y estudiar en Estados Unidos',
    'hero.subtitle': 'Convertimos tu talento en una oportunidad universitaria real',
    'hero.cta': 'Comenzar mi Evaluación Gratuita',
    
    // Stats
    'stats.universities': 'Universidades aliadas',
    'stats.states': 'Estados cubiertos',
    'stats.scholarships': 'En becas gestionadas',
    'stats.success': 'Tasa de éxito',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Te acompañamos en todo el proceso hacia tu beca deportiva en EE. UU.',
    'services.1.title': 'Evaluación Deportiva y Académica',
    'services.1.desc': 'Analizamos tu nivel futbolístico y académico para identificar universidades que encajen con tu perfil, metas y presupuesto.',
    'services.2.title': 'Creación de Perfil Profesional + Highlight',
    'services.2.desc': 'Diseñamos tu perfil completo en inglés, incluyendo edición de video profesional con tus mejores jugadas.',
    'services.3.title': 'Conexión Directa y Negociación con Universidades',
    'services.3.desc': 'Nos encargamos de presentarte a entrenadores en EE. UU. y gestionar becas según tus objetivos.',
    'services.4.title': 'Acompañamiento Personalizado',
    'services.4.desc': 'Te guiamos paso a paso: aplicación universitaria, visado, procesos deportivos y adaptación.',
    
    // About
    'about.title': 'Más que una Agencia, Somos tu Equipo',
    'about.subtitle': 'Ignacio y Mohammed fundaron FutbolUAgency para que ningún jugador vuelva a sentirse solo en su sueño. Tras vivir malas experiencias con agencias poco transparentes, decidieron crear una organización cercana, profesional y comprometida.',
    'about.ignacio.role': 'Finanzas y Operaciones',
    'about.ignacio.quote': 'Vivir la soledad de estar en un país extranjero con una agencia que solo buscaba dinero me marcó. Fundé esto para que ningún jugador se sienta abandonado.',
    'about.moha.role': 'Relaciones con Universidades',
    'about.moha.quote': 'Me sentí abandonado al intentar transferirme. Nuestra misión es estar presentes en todo momento para el jugador y su familia.',
    'about.cta': 'Conoce cómo podemos ayudarte',
    
    // Requirements
    'requirements.title': 'Requisitos Básicos',
    'requirements.subtitle': 'Lo que necesitas para iniciar tu camino hacia una beca deportiva.',
    'requirements.1.title': 'Nivel Deportivo',
    'requirements.1.desc': 'Experiencia competitiva en clubes, academias o selecciones.',
    'requirements.2.title': 'Nivel de Estudios',
    'requirements.2.desc': 'Haber terminado el bachillerato/ESO o estar en último año.',
    'requirements.3.title': 'Video Destacado',
    'requirements.3.desc': 'Tener videos jugando es fundamental para evaluar tu nivel.',
    'requirements.4.title': 'Inglés Básico',
    'requirements.4.desc': 'Se recomienda un nivel básico de inglés. Te guiamos en los exámenes.',
    
    // Funnel
    'funnel.title': 'Tu Camino a la Beca',
    'funnel.subtitle': 'Un proceso claro, personalizado y respaldado por experiencia internacional.',
    'funnel.step1': 'Evaluación Integral del Perfil',
    'funnel.step2': 'Creación de Highlight Video Profesional',
    'funnel.step3': 'Contacto Directo con Universidades',
    'funnel.step4': 'Oferta, Visado y Asesoría Final',
    
    // Testimonials
    'testimonials.title': 'Casos de Éxito',
    'testimonials.subtitle': 'Historias reales de jugadores que cumplieron su sueño con nuestra ayuda',
    
    // CTA
    'cta.title': '¿Listo para comenzar?',
    'cta.subtitle': 'Agenda una evaluación gratuita de 20 minutos con nuestro equipo.',
    'cta.button': 'Evalúa tu Beca GRATIS',
    
    // Footer
    'footer.tagline': 'Transformamos tu talento deportivo en una oportunidad universitaria en Estados Unidos',
    'footer.contact': 'Contacto',
    'footer.links': 'Enlaces Rápidos',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.success': 'Success Stories',
    'nav.about': 'About Us',
    'nav.cta': 'Evaluate Your Scholarship FREE',
    
    // Hero
    'hero.title': 'Fulfill Your Dream of Playing and Studying in the United States',
    'hero.subtitle': 'We turn your talent into a real university opportunity',
    'hero.cta': 'Start My Free Evaluation',
    
    // Stats
    'stats.universities': 'Partner Universities',
    'stats.states': 'States Covered',
    'stats.scholarships': 'In Managed Scholarships',
    'stats.success': 'Success Rate',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We accompany you through the entire process towards your sports scholarship in the U.S.',
    'services.1.title': 'Sports and Academic Evaluation',
    'services.1.desc': 'We analyze your soccer and academic level to identify universities that match your profile, goals, and budget.',
    'services.2.title': 'Professional Profile Creation + Highlight Video',
    'services.2.desc': 'We design your complete profile in English, including professional video editing with your best plays.',
    'services.3.title': 'Direct Connection and Negotiation with Universities',
    'services.3.desc': 'We handle presenting you to coaches in the U.S. and managing scholarships according to your goals.',
    'services.4.title': 'Personalized Support',
    'services.4.desc': 'We guide you step by step: university application, visa, sports processes, and adaptation.',
    
    // About
    'about.title': 'More Than an Agency, We Are Your Team',
    'about.subtitle': 'Ignacio and Mohammed founded FutbolUAgency so that no player would ever feel alone in their dream again. After experiencing poor treatment from non-transparent agencies, they decided to create a close, professional, and committed organization.',
    'about.ignacio.role': 'Finance and Operations',
    'about.ignacio.quote': 'Living the loneliness of being in a foreign country with an agency that only sought money marked me. I founded this so that no player feels abandoned.',
    'about.moha.role': 'University Relations',
    'about.moha.quote': 'I felt abandoned when trying to transfer. Our mission is to be present at all times for the player and their family.',
    'about.cta': 'Learn How We Can Help You',
    
    // Requirements
    'requirements.title': 'Basic Requirements',
    'requirements.subtitle': 'What you need to start your journey towards a sports scholarship.',
    'requirements.1.title': 'Sports Level',
    'requirements.1.desc': 'Competitive experience in clubs, academies, or national teams.',
    'requirements.2.title': 'Education Level',
    'requirements.2.desc': 'Have completed high school or be in your final year.',
    'requirements.3.title': 'Highlight Video',
    'requirements.3.desc': 'Having game videos is essential to evaluate your level.',
    'requirements.4.title': 'Basic English',
    'requirements.4.desc': 'A basic level of English is recommended. We guide you through the exams.',
    
    // Funnel
    'funnel.title': 'Your Path to the Scholarship',
    'funnel.subtitle': 'A clear, personalized process backed by international experience.',
    'funnel.step1': 'Comprehensive Profile Evaluation',
    'funnel.step2': 'Professional Highlight Video Creation',
    'funnel.step3': 'Direct Contact with Universities',
    'funnel.step4': 'Offer, Visa and Final Advisory',
    
    // Testimonials
    'testimonials.title': 'Success Stories',
    'testimonials.subtitle': 'Real stories of players who fulfilled their dream with our help',
    
    // CTA
    'cta.title': 'Ready to Start?',
    'cta.subtitle': 'Schedule a free 20-minute evaluation with our team.',
    'cta.button': 'Evaluate Your Scholarship FREE',
    
    // Footer
    'footer.tagline': 'We transform your sports talent into a university opportunity in the United States',
    'footer.contact': 'Contact',
    'footer.links': 'Quick Links',
    'footer.rights': 'All rights reserved.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
