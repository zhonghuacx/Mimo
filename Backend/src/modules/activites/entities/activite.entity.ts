import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Activite extends Model<Activite> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
}
