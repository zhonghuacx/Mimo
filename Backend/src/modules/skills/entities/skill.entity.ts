import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class Skill extends Model<Skill> {
  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
