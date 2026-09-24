import { TECH_CATALOG, TechId } from '@core/tech/tech-catalog';
import { Project } from './project.model';

export const isTechId = (value: unknown): value is TechId =>
  typeof value === 'string' && Object.hasOwn(TECH_CATALOG, value);

/** Proyectos que usan la tecnología indicada. Sin tecnología (null) → todos. */
export const filterProjectsByTech = (projects: readonly Project[], tech: TechId | null): readonly Project[] =>
  tech ? projects.filter(project => project.techs.includes(tech)) : projects;

/** Tecnologías presentes en los proyectos, sin repetir y en el orden del catálogo. */
export const techsUsedIn = (projects: readonly Project[]): TechId[] => {
  const used = new Set(projects.flatMap(project => project.techs));
  return (Object.keys(TECH_CATALOG) as TechId[]).filter(tech => used.has(tech));
};
