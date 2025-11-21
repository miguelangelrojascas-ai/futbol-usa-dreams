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
    'hero.secondaryCta': 'Ver casos de éxito',
    'hero.trust': 'Acompañamos a jugadores de 12 países a conseguir becas completas.',
    'hero.badge1': 'Sesión estratégica 1:1',
    'hero.badge2': 'Respuesta en menos de 24h',
    'hero.playbookLabel': 'Roadmap personalizado',
    'hero.playbookTitle': 'FutbolU Playbook',
    'hero.playbookTier': 'Elite',
    'hero.playbook1': 'Evaluación deportiva y académica 360°',
    'hero.playbook2': 'Highlight profesional listo para entrenadores',
    'hero.playbook3': 'Negociación directa con universidades NCAA/NAIA',
    'hero.playbook4': 'Visa, onboarding y acompañamiento familiar',
    'hero.playbookNext': 'Próximos cupos',
    'hero.playbookWeek': 'Evaluaciones esta semana',
    'hero.playbookSlots': '4 espacios',
    
    // Stats
    'stats.universities': 'Universidades aliadas',
    'stats.states': 'Estados cubiertos',
    'stats.scholarships': 'En becas gestionadas',
    'stats.success': 'Tasa de éxito',
    'stats.title': 'Impacto Global y Resultados',
    'stats.subtitle': 'Datos que respaldan nuestro compromiso con tu beca deportiva en Estados Unidos.',

    // Services
    'services.badge': 'Mentoría integral',
    
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
    'about.ignacio.story': 'Mi experiencia de ir a una universidad en Estados Unidos para jugar fútbol fue un proceso desafiante. Proveniente de Alicante y habiendo jugado en el Hercules FC, decidí dar el paso de venir a Estados Unidos en busca de nuevas oportunidades. Sin embargo, descubrí que la agencia que me ayudó en el proceso no era de mucha ayuda en realidad, ya que parecían estar más interesados en obtener dinero que en brindar un verdadero apoyo.\n\nSentí una gran soledad durante esa etapa, ya que estaba en un país extranjero sin conocer a nadie. Tuve que trabajar arduamente para encontrar una universidad que me permitiera desarrollarme tanto como deportista como estudiante. Fue un camino lleno de obstáculos, pero mi determinación y perseverancia me impulsaron a seguir adelante.\n\nDediqué horas interminables a investigar universidades, enviar solicitudes y comunicarme con entrenadores. Cada rechazo que recibía me desanimaba, pero no me permití rendirme. Finalmente, después de un largo y agotador proceso, logré encontrar una universidad que me ofrecía la oportunidad de jugar al fútbol y estudiar.\n\nMi experiencia en ir a una universidad en Estados Unidos para jugar fútbol fue un viaje lleno de altibajos. Aunque me sentí solo y decepcionado con la agencia que me ayudó, pude encontrar una universidad por mi cuenta y desarrollarme tanto en el deporte como en los estudios. A través del trabajo duro, la perseverancia y la determinación, pude superar los desafíos y crecer como persona.',
    'about.moha.role': 'Relaciones con Universidades',
    'about.moha.quote': 'Me sentí abandonado al intentar transferirme. Nuestra misión es estar presentes en todo momento para el jugador y su familia.',
    'about.moha.story': 'Cuando llegó el momento de transferirme a una universidad de mayor nivel, esperaba contar con el respaldo y la asistencia de la empresa. Sin embargo, me decepcioné al descubrir que no estaban dispuestos a ayudarme en este proceso tan importante. Me sentí abandonado y desorientado, enfrentándome a numerosos obstáculos para encontrar una nueva institución que cumpliera mis metas deportivas y académicas.\n\nFue esta experiencia personal la que nos impulsó a fundar nuestra empresa actual, con el objetivo de marcar la diferencia en la vida de los jugadores y familiares, y así poder brindarles un servicio integral y comprometido. Entendemos la importancia de estar presentes en todo momento, ofrecer un apoyo constante a cada jugador, especialmente cuando se trata de buscar becas en universidades de alto nivel.\n\nNuestra empresa se creó con la misión de estar en constante apoyo y cuidado de cada jugador, evitando que pasen por experiencias frustrantes y desalentadoras como la que yo experimenté. Trabajamos arduamente para ayudar a los jugadores a obtener becas en universidades de calidad, asegurándonos de que reciban la atención y el respaldo que merecen en cada paso del camino.',
    'about.cta': 'Conoce cómo podemos ayudarte',
    'about.readMore': 'Leer historia completa',
    'about.readLess': 'Leer menos',
    
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
    'requirements.ready': 'Listo',
    
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
    'cta.note': 'Respondemos a todas las aplicaciones en menos de 24 horas.',
    
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
    'hero.secondaryCta': 'See success stories',
    'hero.trust': 'We guide players from 12 countries to secure full scholarships.',
    'hero.badge1': '1:1 strategy session',
    'hero.badge2': 'Response in under 24h',
    'hero.playbookLabel': 'Personalized roadmap',
    'hero.playbookTitle': 'FutbolU Playbook',
    'hero.playbookTier': 'Elite',
    'hero.playbook1': '360° sports and academic evaluation',
    'hero.playbook2': 'Pro highlight video ready for coaches',
    'hero.playbook3': 'Direct negotiation with NCAA/NAIA universities',
    'hero.playbook4': 'Visa, onboarding and family support',
    'hero.playbookNext': 'Next available slots',
    'hero.playbookWeek': 'Evaluations this week',
    'hero.playbookSlots': '4 spots left',
    
    // Stats
    'stats.universities': 'Partner Universities',
    'stats.states': 'States Covered',
    'stats.scholarships': 'In Managed Scholarships',
    'stats.success': 'Success Rate',
    'stats.title': 'Global Impact and Results',
    'stats.subtitle': 'Numbers that prove our commitment to your sports scholarship in the U.S.',

    // Services
    'services.badge': 'End-to-end mentorship',

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
    'about.ignacio.story': 'My experience going to a university in the United States to play soccer was a challenging process. Coming from Alicante and having played for Hercules FC, I decided to take the step to come to the United States in search of new opportunities. However, I discovered that the agency that helped me in the process was not really helpful, as they seemed more interested in getting money than providing real support.\n\nI felt a great loneliness during that stage, as I was in a foreign country without knowing anyone. I had to work hard to find a university that would allow me to develop both as an athlete and as a student. It was a path full of obstacles, but my determination and perseverance drove me to keep going.\n\nI dedicated endless hours to researching universities, sending applications, and communicating with coaches. Each rejection I received discouraged me, but I did not allow myself to give up. Finally, after a long and exhausting process, I managed to find a university that offered me the opportunity to play soccer and study.\n\nMy experience going to a university in the United States to play soccer was a journey full of ups and downs. Although I felt alone and disappointed with the agency that helped me, I was able to find a university on my own and develop both in sports and studies. Through hard work, perseverance, and determination, I was able to overcome challenges and grow as a person.',
    'about.moha.role': 'University Relations',
    'about.moha.quote': 'I felt abandoned when trying to transfer. Our mission is to be present at all times for the player and their family.',
    'about.moha.story': 'When the time came to transfer to a higher level university, I expected to have the support and assistance of the company. However, I was disappointed to discover that they were not willing to help me in this important process. I felt abandoned and disoriented, facing numerous obstacles to find a new institution that would meet my sports and academic goals.\n\nIt was this personal experience that drove us to found our current company, with the goal of making a difference in the lives of players and families, and being able to provide them with a comprehensive and committed service. We understand the importance of being present at all times, offering constant support to each player, especially when it comes to seeking scholarships at high-level universities.\n\nOur company was created with the mission of being in constant support and care of each player, preventing them from going through frustrating and discouraging experiences like the one I experienced. We work hard to help players obtain scholarships at quality universities, making sure they receive the attention and support they deserve every step of the way.',
    'about.cta': 'Learn How We Can Help You',
    'about.readMore': 'Read full story',
    'about.readLess': 'Read less',
    
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
    'requirements.ready': 'Ready',
    
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
    'cta.note': 'We answer every application in under 24 hours.',
    
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
