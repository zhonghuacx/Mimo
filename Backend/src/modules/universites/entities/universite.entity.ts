import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class University extends Model<University> {
    @Unique
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    logo: string;
}
