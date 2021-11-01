import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true,
  // })
  // id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  status: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
}
