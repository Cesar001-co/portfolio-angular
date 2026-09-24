import { Project } from './project.model';

/**
 * Fuente única de proyectos: la consumen el home (destacados) y la página /projects.
 * Imágenes en public/assets/projects/.
 */
// TODO(i18n): category y description por idioma.
export const PROJECTS: readonly Project[] = [
  {
    id: 'nuxten',
    name: 'Nuxten',
    category: 'Página web',
    description:
      'Herramienta para medir la usabilidad de un producto de software, basada en los principios heurísticos propuestos por Jakob Nielsen.',
    image: { src: 'assets/projects/nuxten.jpg', width: 475, height: 297 },
    techs: ['spring-boot', 'angular', 'postgresql', 'firebase'],
    links: {
      github: 'https://github.com/Cesar001-co/nuxten_project',
      web: 'http://190.5.199.21/NUXTEN_PROJECT',
    },
    featured: true,
  },
  {
    id: 'sickpet',
    name: 'SickPet',
    category: 'Aplicación móvil',
    description:
      'Aplicación Android para gestionar el cuidado de mascotas y animales por parte de clínicas veterinarias y sus dueños.',
    image: { src: 'assets/projects/sickpet.jpg', width: 475, height: 297 },
    techs: ['ionic', 'firebase'],
    links: {
      github: 'https://github.com/Cesar001-co/SickPetCode',
    },
    featured: true,
  },
];

export const featuredProjects = (limit: number): readonly Project[] =>
  PROJECTS.filter(project => project.featured).slice(0, limit);
