import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { Offer } from '../../offers/entities/offer.entity';

@Table
export class UserOffer extends Model<UserOffer> {
  @ForeignKey(() => Offer)
  @Column
  offer_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => Offer)
  offer: Offer;
}
