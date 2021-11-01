import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/entities/user.entity';
import { UserSkill } from '../../modules/users/entities/user_skill.entity';
import { Post } from '../../modules/posts/post.entity';
import { Job } from '../../modules/jobs/entities/job.entity';
import { Activite } from '../../modules/activites/entities/activite.entity';
import { Order } from '../../modules/orders/entities/order.entity';
import { Offer } from '../../modules/offers/entities/offer.entity';
import { Skill } from '../../modules/skills/entities/skill.entity';
import { UserOffer } from '../../modules/users/entities/user_offers.entity';
import { Like } from '../../modules/likes/entities/like.entity';
import { Connections } from '../../modules/connections/entities/connection.entity';
import { UserEducation } from '../../modules/users/entities/user_education.entity';
import { University } from '../../modules/universites/entities/universite.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      const sequelize = new Sequelize(
        'df7agiv9jbp9hc',
        'sdwsmloermsari',
        '685af9d4f9614e9ae6dcb4f9c99a82b6e1910d84a15d4a8ec471ca4bacc16a2b',
        {
          dialect: 'postgres',
          protocol: 'postgres',
          host: process.env.DB_HOST,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false, // very important
            },
          },
        },
      );

      sequelize.addModels([
        User,
        Post,
        Job,
        Activite,
        Order,
        Offer,
        Skill,
        UserSkill,
        UserOffer, UserEducation,
        Like,
        Connections, University
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
