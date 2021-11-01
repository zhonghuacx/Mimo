import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

@Table
export class Offer extends Model<Offer> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
    defaultValue: 0,
  })
  rate: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
}
