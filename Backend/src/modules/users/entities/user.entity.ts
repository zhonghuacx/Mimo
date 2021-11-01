import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserSkill } from './user_skill.entity';
import { UserOffer } from './user_offers.entity';
import { UserEducation } from './user_education.entity';
import { Offer } from '../../offers/entities/offer.entity';
import { Order } from '../../orders/entities/order.entity';
import { Like } from '../../likes/entities/like.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country_code: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "https://i.imgur.com/OqLTp4V.jpg"
  })
  image: string;

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: true,
  // })
  // headline: string;


  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.INTEGER,
    //Values
    // 1: New Friend.
    // 2: Need a Job.
    // 3: looking for New Freelance.
    // 1: build a startup.
    allowNull: false,
  })
  connected_for_id: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  jobs_id: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  activites_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  requested_offers: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  withdraw: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  bio: string;


  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  headline: string;

  // @Column({
  //   type: DataType.ENUM,
  //   values: ['male', 'female'],
  //   allowNull: true,
  // })
  // gender: string;

  @HasMany(() => UserSkill)
  skills: UserSkill;

  @HasMany(() => UserOffer)
  offerRequests: UserOffer;

  @HasMany(() => Offer)
  offers: Offer;

  @HasMany(() => Order)
  orders: Order;

  @HasMany(() => UserEducation)
  education: UserEducation;
}
