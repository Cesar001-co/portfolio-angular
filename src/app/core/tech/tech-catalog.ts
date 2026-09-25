/**
 * Catálogo central de tecnologías. Lo consumen Skills, Proyectos, etc.
 *
 * Íconos: archivos SVG monocromáticos en public/assets/icons/tech/<id>.svg.
 * Se pintan con máscara CSS (heredan el color del texto), así que para agregar
 * una tecnología basta con añadir su entrada aquí y, si tiene ícono, su archivo.
 */
export const TECH_ICON_DIR = 'assets/icons/tech';

export interface Tech {
  name: string;
  /** false cuando aún no hay SVG: se muestra un ícono genérico. */
  hasIcon: boolean;
}

export const TECH_CATALOG = {
  // Lenguajes
  java: { name: 'Java', hasIcon: true },
  typescript: { name: 'TypeScript', hasIcon: true },
  javascript: { name: 'JavaScript', hasIcon: true },
  python: { name: 'Python', hasIcon: true },
  html: { name: 'HTML', hasIcon: true },
  css: { name: 'CSS', hasIcon: true },
  sql: { name: 'SQL', hasIcon: true },
  // Frameworks y librerías
  angular: { name: 'Angular', hasIcon: true },
  nestjs: { name: 'NestJS', hasIcon: true },
  nodejs: { name: 'Node.js', hasIcon: false },
  expressjs: { name: 'Express.js', hasIcon: false },
  'spring-boot': { name: 'Spring Boot', hasIcon: true },
  fastapi: { name: 'FastAPI', hasIcon: true },
  ionic: { name: 'Ionic', hasIcon: true },
  tailwind: { name: 'Tailwind', hasIcon: true },
  // Bases de datos y servicios
  postgresql: { name: 'PostgreSQL', hasIcon: true },
  mysql: { name: 'MySQL', hasIcon: true },
  mongodb: { name: 'MongoDB', hasIcon: true },
  firebase: { name: 'Firebase', hasIcon: true },
  // DevOps y herramientas
  docker: { name: 'Docker', hasIcon: true },
  github: { name: 'GitHub', hasIcon: true },
  figma: { name: 'Figma', hasIcon: true },
  'claude-code': { name: 'Claude Code', hasIcon: true },
  // Cloud / infraestructura
  dokploy: { name: 'Dokploy', hasIcon: true },
  vercel: { name: 'Vercel', hasIcon: true },
} as const satisfies Record<string, Tech>;

export type TechId = keyof typeof TECH_CATALOG;

export const techIconUrl = (id: TechId): string => `${TECH_ICON_DIR}/${id}.svg`;
