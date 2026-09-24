import { TechId } from '@core/tech/tech-catalog';

export interface SkillGroup {
  /** Id estable: también es la clave de su etiqueta en skills.groups.<id> (i18n). */
  id: string;
  techs: readonly TechId[];
}

export const SKILLS_CONTENT = {
  heading: { title: 'skills.title', subtitle: 'skills.subtitle' },
  groups: [
    { id: 'languages', techs: ['java', 'typescript', 'sql', 'html', 'css', 'python'] },
    { id: 'frameworks', techs: ['angular', 'nestjs', 'spring-boot', 'fastapi'] },
    { id: 'databases', techs: ['postgresql', 'mysql', 'mongodb'] },
    { id: 'devops-tools', techs: ['docker', 'github', 'figma', 'claude-code'] },
    { id: 'cloud-infra', techs: ['dokploy', 'vercel'] },
  ] satisfies SkillGroup[],
} as const;
