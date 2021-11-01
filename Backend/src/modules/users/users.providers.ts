import { User } from './entities/user.entity';
import { UserEducation_REPOSITORY, USER_REPOSITORY } from '../../core/constants';
import { USERSKILL_REPOSITORY } from '../../core/constants';
import { UserSkill } from '../users/entities/user_skill.entity';
import { UserEducation } from './entities/user_education.entity';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
  {
    provide: USERSKILL_REPOSITORY,
    useValue: UserSkill,
  },
  {
    provide: UserEducation_REPOSITORY,
    useValue: UserEducation,
  },

];
