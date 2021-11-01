import { Skills_REPOSITORY } from '../../core/constants';
import { Skill } from './entities/skill.entity';

export const SkillsProviders = [
  {
    provide: Skills_REPOSITORY,
    useValue: Skill,
  },
];
