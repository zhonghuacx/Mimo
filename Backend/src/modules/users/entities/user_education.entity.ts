import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { University } from '../../universites/entities/universite.entity';

@Table
export class UserEducation extends Model<UserEducation> {
  @ForeignKey(() => University)
  @Column
  University_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => University)
  University: University;
}
