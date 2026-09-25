import { Project } from './project.model';

/**
 * Fuente única de proyectos: la consumen el home (destacados) y la página /projects.
 * Imágenes en public/assets/projects/.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'eventManager4',
    name: 'Event Manager v4.0.0',
    images: [
      { src: 'assets/projects/eventmanager_01.png' },
      { src: 'assets/projects/eventmanager_02.png' },
      { src: 'assets/projects/eventmanager_03.png' },
      { src: 'assets/projects/eventmanager_04.png' },
      { src: 'assets/projects/eventmanager_05.png' },
      { src: 'assets/projects/eventmanager_06.png' },
    ],
    techs: ['angular', 'nestjs', 'postgresql', 'python', 'fastapi', 'docker'],
    links: { },
    featured: true,
  },
  {
    id: 'statistics',
    name: 'Registro Online',
    images: [
      { src: 'assets/projects/statistics_01.png' },
      { src: 'assets/projects/statistics_02.png' },
      { src: 'assets/projects/statistics_03.png' },
    ],
    techs: ['angular', 'nestjs', 'mongodb', 'docker'],
    links: {
      web: 'https://statistics-4.kapulus.tech/statistics/7a9eff7f-a686-4b3d-8415-ed5b1a079004'
    },
    featured: true,
  },
  {
    id: 'eventManager3',
    name: 'Event Manager v3.7.1',
    images: [
      { src: 'assets/projects/eventmanager3_01.png' }
    ],
    techs: ['angular', 'expressjs', 'postgresql'],
    links: { },
    featured: false,
  },
  {
    id: 'onlineRegister',
    name: 'Online Register',
    images: [
      { src: 'assets/projects/onlineregister_01.png' }
    ],
    techs: ['nestjs', 'mongodb'],
    links: { },
    featured: false,
  },
  {
    id: 'casosClinicos',
    name: 'Casos Clínicos',
    images: [
      { src: 'assets/projects/casosclinicos_01.png' },
      { src: 'assets/projects/casosclinicos_02.png' },
      { src: 'assets/projects/casosclinicos_03.png' }
    ],
    techs: ['docker'],
    links: { },
    featured: false,
  },
  {
    id: 'entrepanes',
    name: 'Entre Panes Dashboard',
    images: [
      { src: 'assets/projects/entrepanes_01.png' },
      { src: 'assets/projects/entrepanes_02.png' },
      { src: 'assets/projects/entrepanes_03.png' }
    ],
    techs: ['claude-code'],
    links: { },
    featured: false,
  },
  {
    id: 'nuxten',
    name: 'Nuxten',
    images: [
      { src: 'assets/projects/nuxten.jpg' },
      { src: 'assets/projects/nuxten01.jpg' },
      { src: 'assets/projects/nuxten02.jpg' },
      { src: 'assets/projects/nuxten03.jpg' },
    ],
    techs: ['spring-boot', 'angular', 'postgresql', 'firebase'],
    links: {
      github: 'https://github.com/Cesar001-co/nuxten_project',
      web: 'http://190.5.199.21/NUXTEN_PROJECT',
    },
    featured: false,
  },
  {
    id: 'sickpet',
    name: 'SickPet',
    images: [
      { src: 'assets/projects/sickpet.jpg' },
      { src: 'assets/projects/sickpet01.jpg' },
    ],
    techs: ['ionic', 'firebase'],
    links: {
      github: 'https://github.com/Cesar001-co/SickPetCode',
    },
    featured: false,
  },
];

export const featuredProjects = (limit: number): readonly Project[] =>
  PROJECTS.filter(project => project.featured).slice(0, limit);
