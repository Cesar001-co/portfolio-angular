import { RichParagraph } from '@shared/models/text-segment';

export type ServiceIcon = 'code' | 'support' | 'web';

export interface ServiceItem {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
}

// TODO(i18n): reemplazar textos por claves de traducción.
export const ABOUT_CONTENT = {
  heading: {
    title: 'Sobre mí',
    subtitle: 'Quién soy, cómo trabajo y qué me motiva.',
  },
  paragraphs: [
    [
      { text: 'Ingeniero Informático', strong: true },
      { text: ' apasionado por construir software que resuelve problemas reales. Me especializo en ' },
      { text: 'desarrollo FullStack con Angular, NestJS/Spring Boot y PostgreSQL', strong: true },
      { text: ', y disfruto tanto diseñar la arquitectura de un sistema como resolver diferentes problemas.' },
    ],
    [
      { text: 'En mi última experiencia lideré el desarrollo del sistema de ' },
      { text: 'Kapulus International', strong: true },
      { text: ', una plataforma de gestión de eventos que escalé de ' },
      { text: '4.000 a más de 100.000 usuarios', strong: true },
      { text: ', incluyendo seguridad, biometría (reconocimiento facial) y analítica en tiempo real.' },
    ],
    [
      { text: 'Me interesa especialmente el diseño de ' },
      { text: 'arquitecturas escalables', strong: true },
      { text: ', la creación de algoritmos y, más recientemente, cómo integrar ' },
      { text: 'herramientas de IA', strong: true },
      { text: ' en el flujo de desarrollo.' },
    ],
    [
      { text: 'Soy una persona íntegra, curiosa y con atención al detalle — me autoexijo aprender constantemente y disfruto trabajar en equipo.' },
    ],
  ] satisfies RichParagraph[],
} as const;

export const SERVICES_CONTENT = {
  heading: {
    title: 'Servicios',
    subtitle: 'Soluciones a la medida de tu negocio.',
  },
  items: [
    {
      id: 'custom-development',
      icon: 'code',
      title: 'Desarrollo personalizado',
      description: 'Aplicaciones web a medida, con arquitectura escalable y pensadas para crecer con tu negocio.',
    },
    {
      id: 'support',
      icon: 'support',
      title: 'Soporte y mantenimiento',
      description: 'Actualizaciones, corrección de errores y monitoreo para mantener tu sistema estable y seguro.',
    },
    {
      id: 'informative-sites',
      icon: 'web',
      title: 'Sitios web informativos',
      description: 'Sitios rápidos, responsivos y optimizados para presentar tu marca y atraer clientes.',
    },
  ] satisfies ServiceItem[],
} as const;
