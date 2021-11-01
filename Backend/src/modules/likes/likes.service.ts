import { Injectable, Inject } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

import { LIKES_REPOSITORY } from '../../core/constants';
import { Like } from './entities/like.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LikesService {
  constructor(
    @Inject(LIKES_REPOSITORY) private readonly likeRepository: typeof Like,
  ) { }


  async create(like: Like): Promise<Like> {
    return await this.likeRepository.create<Like>(like);
  }

  async findAll(user_id: number): Promise<{
    rows: Like[];
    count: number;
  }> {
    return await this.likeRepository.findAndCountAll<Like>({
      where: { user_id },
      order: ['createdAt', 'updatedAt'],
      include: [
        {
          model: User,
          attributes: {
            exclude: ['jobs_id', 'connected_for_id'
              , 'activites_id', 'requested_offers', 'withdraw'
              , 'bio', 'country_code', 'updatedAt', 'createdAt'
            ]
          },
        }]
    });
  }


  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  async remove(id: number, user_id: number) {

    this.likeRepository.destroy({ where: { user_id, liked_id: id } }).then(() => {
      return this.findAll(user_id)
    }).catch((e) => {
      return e;
    })
  }

}
