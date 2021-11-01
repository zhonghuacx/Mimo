import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

@Table
export class Like extends Model<Like> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    user_id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    liked_id: number;

    @BelongsTo(() => User)
    user: User;
}
