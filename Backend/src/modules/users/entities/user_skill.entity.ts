import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { Skill } from '../../skills/entities/skill.entity';

@Table
export class UserSkill extends Model<UserSkill> {
  @ForeignKey(() => Skill)
  @Column
  skill_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => Skill)
  skill: Skill;
}
