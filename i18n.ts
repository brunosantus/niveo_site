import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      navbar: {
        home: 'Inicio',
        solutions: 'Soluciones',
        about: 'Nosotros',
        contact: 'Contacto',
        cta: 'Hable con Nosotros'
      },
      hero: {
        badge: 'IA Multimodal & Integraciones',
        title1: 'Agentes que Atienden,',
        title2: 'Venden y Agendan.',
        subtitle: 'Unimos infraestructura fiable y flujos inteligentes en WhatsApp, Telegram y Web. Su equipo sigue todo en tiempo real en una central única.',
        btn_automate: 'Automatizar Ahora',
        btn_features: 'Ver Diferenciales',
        stats: {
          response_time: 'Tiempo de Respuesta',
          response_value: '< 25 seg',
          active_agents: 'Agentes activos 24/7',
          conversion: 'Conversión',
          vs_manual: 'vs. Atención Manual',
          automation: 'Automatización',
          integrations: 'Integraciones Activas',
          next_schedule: 'Próxima cita',
          demo_product: 'Demo de Producto',
          today: 'Hoy'
        }
      },
      features: {
        title_pre: 'Nuestras',
        title_highlight: 'Soluciones Completas',
        description: 'Somos su socio tecnológico 360º. Especialistas en <strong>Agentes Conversacionales (Chatbot Humanizado)</strong>, <strong>Desarrollo de Apps Multiplataforma</strong> y <strong>Creación de Sitios Web</strong> de alto rendimiento.',
        card_agents_title: 'Agentes Conversacionales Humanizados',
        card_agents_desc: 'Chatbots que no parecen robots. Nuestros agentes utilizan IA generativa para entender audio, imagen y contexto, realizando ventas y citas en WhatsApp y Telegram con naturalidad humana.',
        card_sites_title: 'Creación de Sitios & Landing Pages',
        card_sites_desc: 'Sitios web rápidos, optimizados para SEO y enfocados en conversión. Desarrollamos la presencia digital de su marca con diseño moderno y el rendimiento que Google exige.',
        card_apps_title: 'Apps Multiplataforma',
        card_apps_desc: 'Transformamos su idea en aplicaciones nativas para iOS y Android. Desarrollo ágil, interfaces intuitivas y escalabilidad para crecer con su negocio.',
        card_eco_title: 'Ecosistema Integrado',
        card_eco_desc: 'Sea sitio, app o bot, todo se conecta. Integración total a su CRM, Google Calendar y sistemas internos para automatización de extremo a extremo.',
        card_support_title: 'Soporte & Base de Conocimiento',
        card_support_desc: 'FAQs y flujos de soporte con respuestas consistentes, apertura de tickets y actualización de estado. Menos volumen repetitivo para el equipo, más satisfacción (NPS).',
        card_global_title: 'Tecnología Global',
        card_global_desc: 'Infraestructura robusta y segura alojada en la nube, garantizando disponibilidad 24/7 para que su operación nunca se detenga.'
      },
      testimonials: {
        title_pre: 'Resultados que',
        title_highlight: 'Hablan por Sí Mismos',
        subtitle: 'No solo automatización, sino impacto real en la facturación y eficiencia operativa de nuestros socios.',
        t1_quote: 'La implementación de Niveo transformó nuestra atención. El agente recupera carritos abandonados de madrugada y resuelve dudas complejas sin intervención humana.',
        t1_role: 'Director de E-commerce',
        t1_metric: 'Aumento en Ventas',
        t2_quote: 'Antes perdíamos mucho tiempo confirmando consultas manualmente. Ahora, el agente agenda, confirma y reagenda pacientes en WhatsApp integrado a nuestro Calendar.',
        t2_role: 'Gerente',
        t2_metric: 'Reducción de No-Show',
        t3_quote: 'La capacidad de clasificación es impresionante. El bot califica el lead, entiende el presupuesto y solo pasa al vendedor cuando el cliente está listo para cerrar.',
        t3_role: 'Head de Ventas',
        t3_metric: 'Conversión de Leads'
      },
      about: {
        title_pre: '¿Qué es',
        description1: 'NIVEO diseña, construye y opera <strong>agentes conversacionales</strong> que atienden, venden y gestionan reservas/citas en WhatsApp, Telegram y en el chat de tu web o páginas.',
        description2: '<strong>Desarrollamos apps multiplataforma</strong>, landing pages y sitios web de alto rendimiento.',
        description3: 'Unimos una infraestructura fiable, flujos inteligentes y una central única de atención para que tu equipo lo supervise todo en tiempo real.',
        commitment_title: 'Nuestro Compromiso',
        item1: '<strong>Claridad primero</strong> en toda comunicación.',
        item2: '<strong>Escala con toque humano</strong>, sin perder la empatía.',
        item3: '<strong>Métricas en el centro</strong> para un crecimiento predecible.',
        stat_availability: 'Disponibilidad',
        stat_transparency: 'Transparencia',
        stat_growth: 'Crecimiento Sostenible y Escalable',
        stat_growth_sub: 'Transformando conversaciones en ventas'
      },
      contact: {
        title_line1: 'Listo para optimizar sus atenciones y',
        title_highlight: 'Aumentar sus Ventas?',
        subtitle: 'Únase a cientos de empresas innovadoras que confían en Niveo para sus operaciones de misión crítica.',
        label_email: 'Correo',
        label_support: 'Soporte',
        label_support_desc: '24/7 para clientes Enterprise',
        label_location: 'Ubicación',
        btn_schedule: 'Agendar Consultoría',
        btn_agent: 'Hablar con Agente'
      },
      footer: {
        description: 'Empoderando negocios con infraestructura de nube de próxima generación y servicios de transformación digital.',
        rights: '© 2024 Niveo. Todos los derechos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Términos de Servicio',
        contact_header: 'Contacto'
      },
      app: {
        tech_stack: 'NUESTRA TECNOLOGÍA SE INTEGRA CON'
      },
      chat: {
        header_title: 'Agente Niveo',
        status: 'En línea ahora',
        placeholder: 'Escriba su mensaje...',
        powered: 'Powered by Niveo',
        initial_msg: '¡Hola! Soy el asistente virtual de Niveo. ¿Cómo puedo ayudarte a automatizar tu negocio hoy?',
        error_msg: 'Lo siento, tengo dificultades para conectar con el servidor en este momento.',
        server_response: 'Respuesta recibida de n8n.'
      }
    }
  },
  pt: {
    translation: {
      navbar: {
        home: 'Início',
        solutions: 'Soluções',
        about: 'Sobre Nós',
        contact: 'Contato',
        cta: 'Fale Conosco'
      },
      hero: {
        badge: 'IA Multimodal & Integrações',
        title1: 'Agentes que Atendem,',
        title2: 'Vendem e Agendam.',
        subtitle: 'Unimos infraestrutura confiável e fluxos inteligentes no WhatsApp, Telegram e Web. Sua equipe acompanha tudo em tempo real em uma central única.',
        btn_automate: 'Automatizar Agora',
        btn_features: 'Ver Diferenciais',
        stats: {
          response_time: 'Tempo de Resposta',
          response_value: '< 25 seg',
          active_agents: 'Agentes ativos 24/7',
          conversion: 'Conversão',
          vs_manual: 'vs. Atendimento Manual',
          automation: 'Automação',
          integrations: 'Integrações Ativas',
          next_schedule: 'Próximo agendamento',
          demo_product: 'Demo de Produto',
          today: 'Hoje'
        }
      },
      features: {
        title_pre: 'Nossas',
        title_highlight: 'Soluções Completas',
        description: 'Somos seu parceiro tecnológico 360º. Especialistas em <strong>Agentes Conversacionais (Chatbot Humanizado)</strong>, <strong>Desenvolvimento de Apps Multiplataforma</strong> e <strong>Criação de Sites</strong> de alta performance.',
        card_agents_title: 'Agentes Conversacionais Humanizados',
        card_agents_desc: 'Chatbots que não parecem robôs. Nossos agentes utilizam IA generativa para entender áudio, imagem e contexto, realizando vendas e agendamentos no WhatsApp e Telegram com naturalidade humana.',
        card_sites_title: 'Criação de Sites & Landing Pages',
        card_sites_desc: 'Websites rápidos, otimizados para SEO e focados em conversão. Desenvolvemos a presença digital da sua marca com design moderno e a performance que o Google exige.',
        card_apps_title: 'Apps Multiplataforma',
        card_apps_desc: 'Transformamos sua ideia em aplicativos nativos para iOS e Android. Desenvolvimento ágil, interfaces intuitivas e escalabilidade para crescer com seu negócio.',
        card_eco_title: 'Ecossistema Integrado',
        card_eco_desc: 'Seja site, app ou bot, tudo se conecta. Integração total ao seu CRM, Google Calendar, e sistemas internos para automação de ponta a ponta.',
        card_support_title: 'Suporte & Base de Conhecimento',
        card_support_desc: 'FAQs e fluxos de suporte com respostas consistentes, abertura de tickets e atualização de status. Menos volume repetitivo para o time, mais satisfação (NPS).',
        card_global_title: 'Tecnologia Global',
        card_global_desc: 'Infraestrutura robusta e segura hospedada na nuvem, garantindo disponibilidade 24/7 para sua operação não parar nunca.'
      },
      testimonials: {
        title_pre: 'Resultados que',
        title_highlight: 'Falam por Si',
        subtitle: 'Não apenas automação, mas impacto real no faturamento e eficiência operacional de nossos parceiros.',
        t1_quote: 'A implementação da Niveo transformou nosso atendimento. O agente recupera carrinhos abandonados de madrugada e tira dúvidas complexas sobre produtos sem intervenção humana.',
        t1_role: 'Diretor de E-commerce',
        t1_metric: 'Aumento em Vendas',
        t2_quote: 'Antes, perdíamos muito tempo confirmando consultas manualmente. Agora, o agente agenda, confirma e reagenda pacientes no WhatsApp integrado ao nosso Calendar.',
        t2_role: 'Gestora',
        t2_metric: 'Redução de No-Show',
        t3_quote: 'A capacidade de triagem é impressionante. O bot qualifica o lead, entende o orçamento e só passa para o vendedor quando o cliente está pronto para fechar.',
        t3_role: 'Head de Vendas',
        t3_metric: 'Conversão de Leads'
      },
      about: {
        title_pre: 'O que é a',
        description1: 'A NIVEO projeta, constrói e opera <strong>agentes conversacionais</strong> que atendem, vendem e agendam em WhatsApp, Telegram e chat do site/páginas.',
        description2: '<strong>Desenvolvemos apps Multiplataforma</strong>, landing pages e sites de alta performance.',
        description3: 'Unimos infraestrutura confiável, fluxos inteligentes e uma central única de atendimento para sua equipe acompanhar tudo em tempo real.',
        commitment_title: 'Nosso Compromisso',
        item1: '<strong>Clareza primeiro</strong> em toda comunicação.',
        item2: '<strong>Escala com toque humano</strong>, sem perder a empatia.',
        item3: '<strong>Métricas no centro</strong> para crescimento previsível.',
        stat_availability: 'Disponibilidade',
        stat_transparency: 'Transparência',
        stat_growth: 'Crescimento Sustentável',
        stat_growth_sub: 'Transformando conversas em vendas'
      },
      contact: {
        title_line1: 'Pronto para otimizar seus atendimentos e',
        title_highlight: 'Aumentar suas Vendas?',
        subtitle: 'Junte-se a centenas de empresas inovadoras que confiam na Niveo para suas operações de missão crítica.',
        label_email: 'Email',
        label_support: 'Suporte',
        label_support_desc: '24/7 para clientes Enterprise',
        label_location: 'Localização',
        btn_schedule: 'Agendar Consultoria',
        btn_agent: 'Falar com Agente'
      },
      footer: {
        description: 'Empoderando negócios com infraestrutura de nuvem de próxima geração e serviços de transformação digital.',
        rights: '© 2024 Niveo. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        contact_header: 'Contato'
      },
      app: {
        tech_stack: 'NOSSA TECNOLOGIA INTEGRA COM'
      },
      chat: {
        header_title: 'Agente Niveo',
        status: 'Online agora',
        placeholder: 'Digite sua mensagem...',
        powered: 'Powered by Niveo',
        initial_msg: 'Olá! Sou o assistente virtual da Niveo. Como posso ajudar você a automatizar seu negócio hoje?',
        error_msg: 'Desculpe, estou tendo dificuldades para conectar ao servidor no momento.',
        server_response: 'Resposta recebida do n8n.'
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: 'Home',
        solutions: 'Solutions',
        about: 'About Us',
        contact: 'Contact',
        cta: 'Contact Us'
      },
      hero: {
        badge: 'Multimodal AI & Integrations',
        title1: 'Agents that Serve,',
        title2: 'Sell and Schedule.',
        subtitle: 'We unite reliable infrastructure and intelligent flows on WhatsApp, Telegram, and Web. Your team tracks everything in real-time in a single hub.',
        btn_automate: 'Automate Now',
        btn_features: 'See Differences',
        stats: {
          response_time: 'Response Time',
          response_value: '< 25 sec',
          active_agents: 'Active agents 24/7',
          conversion: 'Conversion',
          vs_manual: 'vs. Manual Support',
          automation: 'Automation',
          integrations: 'Active Integrations',
          next_schedule: 'Next schedule',
          demo_product: 'Product Demo',
          today: 'Today'
        }
      },
      features: {
        title_pre: 'Our',
        title_highlight: 'Complete Solutions',
        description: 'We are your 360º technology partner. Specialists in <strong>Conversational Agents (Humanized Chatbot)</strong>, <strong>Cross-platform App Development</strong> and <strong>High Performance Website Creation</strong>.',
        card_agents_title: 'Humanized Conversational Agents',
        card_agents_desc: 'Chatbots that don\'t feel like robots. Our agents use generative AI to understand audio, images, and context, performing sales and scheduling on WhatsApp and Telegram with human naturalness.',
        card_sites_title: 'Websites & Landing Pages',
        card_sites_desc: 'Fast websites, SEO-optimized and focused on conversion. We develop your brand\'s digital presence with modern design and the performance Google requires.',
        card_apps_title: 'Cross-platform Apps',
        card_apps_desc: 'We transform your idea into native iOS and Android apps. Agile development, intuitive interfaces, and scalability to grow with your business.',
        card_eco_title: 'Integrated Ecosystem',
        card_eco_desc: 'Whether site, app, or bot, everything connects. Total integration with your CRM, Google Calendar, and internal systems for end-to-end automation.',
        card_support_title: 'Support & Knowledge Base',
        card_support_desc: 'FAQs and support flows with consistent answers, ticket opening, and status updates. Less repetitive volume for the team, higher satisfaction (NPS).',
        card_global_title: 'Global Technology',
        card_global_desc: 'Robust and secure cloud-hosted infrastructure, ensuring 24/7 availability so your operation never stops.'
      },
      testimonials: {
        title_pre: 'Results that',
        title_highlight: 'Speak for Themselves',
        subtitle: 'Not just automation, but real impact on revenue and operational efficiency for our partners.',
        t1_quote: 'The implementation of Niveo transformed our service. The agent recovers abandoned carts at dawn and answers complex product questions without human intervention.',
        t1_role: 'E-commerce Director',
        t1_metric: 'Sales Increase',
        t2_quote: 'Before, we wasted a lot of time confirming appointments manually. Now, the agent schedules, confirms, and reschedules patients on WhatsApp integrated with our Calendar.',
        t2_role: 'Manager',
        t2_metric: 'No-Show Reduction',
        t3_quote: 'The screening capability is impressive. The bot qualifies the lead, understands the budget, and only passes it to the salesperson when the client is ready to close.',
        t3_role: 'Head of Sales',
        t3_metric: 'Lead Conversion'
      },
      about: {
        title_pre: 'What is',
        description1: 'NIVEO designs, builds, and operates <strong>conversational agents</strong> that serve, sell, and schedule on WhatsApp, Telegram, and web chat.',
        description2: '<strong>We develop Cross-platform apps</strong>, landing pages, and high-performance websites.',
        description3: 'We unite reliable infrastructure, intelligent flows, and a single service hub for your team to track everything in real-time.',
        commitment_title: 'Our Commitment',
        item1: '<strong>Clarity first</strong> in all communication.',
        item2: '<strong>Scale with a human touch</strong>, without losing empathy.',
        item3: '<strong>Métricas at the center</strong> for predictable growth.',
        stat_availability: 'Availability',
        stat_transparency: 'Transparency',
        stat_growth: 'Sustainable Growth',
        stat_growth_sub: 'Transforming conversations into sales'
      },
      contact: {
        title_line1: 'Ready to optimize your service and',
        title_highlight: 'Increase your Sales?',
        subtitle: 'Join hundreds of innovative companies that trust Niveo for their mission-critical operations.',
        label_email: 'Email',
        label_support: 'Support',
        label_support_desc: '24/7 for Enterprise clients',
        label_location: 'Location',
        btn_schedule: 'Schedule Consulting',
        btn_agent: 'Talk to Agent'
      },
      footer: {
        description: 'Empowering businesses with next-gen cloud infrastructure and digital transformation services.',
        rights: '© 2024 Niveo. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact_header: 'Contact'
      },
      app: {
        tech_stack: 'OUR TECHNOLOGY INTEGRATES WITH'
      },
      chat: {
        header_title: 'Niveo Agent',
        status: 'Online now',
        placeholder: 'Type your message...',
        powered: 'Powered by Niveo',
        initial_msg: 'Hello! I am Niveo\'s virtual assistant. How can I help you automate your business today?',
        error_msg: 'Sorry, I am having trouble connecting to the server at the moment.',
        server_response: 'Response received from n8n.'
      }
    }
  }
};

// Simplified detection
const getUserLang = () => {
  if (typeof window !== 'undefined' && window.navigator) {
    const lang = window.navigator.language;
    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('en')) return 'en';
  }
  return 'es';
};

const initialLang = getUserLang();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;