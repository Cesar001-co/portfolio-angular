import { TechId } from '@core/tech/tech-catalog';

export interface SkillGroup {
  id: string;
  label: string;
  techs: readonly TechId[];
}

// TODO(i18n): reemplazar textos por claves de traducción.
export const SKILLS_CONTENT = {
  heading: {
    title: 'Skills',
    subtitle: 'Tecnologías con las que trabajo día a día.',
  },
  groups: [
    { id: 'languages', label: 'Lenguajes', techs: ['java', 'typescript', 'sql', 'html', 'css', 'python'] },
    { id: 'frameworks', label: 'Frameworks', techs: ['angular', 'nestjs', 'spring-boot', 'fastapi'] },
    { id: 'databases', label: 'Databases', techs: ['postgresql', 'mysql', 'mongodb'] },
    { id: 'devops-tools', label: 'DevOps & Tools', techs: ['docker', 'github', 'figma', 'claude-code'] },
    { id: 'cloud-infra', label: 'Cloud / Infra', techs: ['dokploy', 'vercel'] },
  ] satisfies SkillGroup[],
} as const;
