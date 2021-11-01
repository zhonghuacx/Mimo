import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserEducation_REPOSITORY, USER_REPOSITORY } from '../../core/constants';
import { USERSKILL_REPOSITORY } from '../../core/constants';
import { UserSkill } from '../users/entities/user_skill.entity';
import { Skill } from '../skills/entities/skill.entity';
import { UserOffer } from '../users/entities/user_offers.entity';
import { Offer } from '../offers/entities/offer.entity';
import { Order } from '../orders/entities/order.entity';
import { UserEducation } from './entities/user_education.entity';
import { University } from '../universites/entities/universite.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    @Inject(USERSKILL_REPOSITORY)
    private readonly userSkillsRepository: typeof UserSkill,
    @Inject(UserEducation_REPOSITORY)
    private readonly userEducationRepository: typeof UserEducation,

  ) { }

  async create(user: User): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findOneByPhone(phone: string): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { phone },
      // include: [{ model: UserSkill }],
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { id },
      include: [
        {
          model: UserSkill,
          include: [Skill],
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        {
          model: UserOffer,
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        {
          model: Order,
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        {
          model: Offer,
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
      ],
    });
  }

  async findMatching(user_id: number): Promise<User[]> {
    return await this.userRepository.findAll<User>({

      include: [
        {
          model: UserSkill,
          include: [Skill],
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        {
          model: UserEducation,
          include: [University],
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        }
      ],
    });
  }



  async addskill(userSkill: UserSkill): Promise<UserSkill> {
    return await this.userSkillsRepository.create<UserSkill>(userSkill);
  }

  async add_education(userEducation: UserEducation): Promise<UserEducation> {
    return await this.userEducationRepository.create<UserEducation>(userEducation);
  }

}
