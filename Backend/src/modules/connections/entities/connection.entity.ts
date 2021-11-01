import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

@Table
export class Connections extends Model<Connections> {



  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  connected_id: number;


  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
