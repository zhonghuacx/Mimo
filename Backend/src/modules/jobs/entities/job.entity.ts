import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Job extends Model<Job> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  //   @Column({
  //     type: DataType.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   })
  //   id: number;
}
