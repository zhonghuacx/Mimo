import { Injectable, Inject } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { Connections } from './entities/connection.entity';
import { User } from '../users/entities/user.entity';
import { CONNECTIONS_REPOSITORY } from '../../core/constants';

@Injectable()
export class ConnectionsService {
  constructor(
    @Inject(CONNECTIONS_REPOSITORY)
    private readonly connectionsRepository: typeof Connections,
  ) { }

  async create(Connection: Connections): Promise<Connections> {
    return await this.connectionsRepository.create<Connections>(Connection);
  }

  async findAll(user_id: number): Promise<{
    rows: Connections[];
    count: number;
  }> {
    return await this.connectionsRepository.findAndCountAll<Connections>({
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
    return `This action returns a #${id} connection`;
  }

  update(id: number, updateConnectionDto: UpdateConnectionDto) {
    return `This action updates a #${id} connection`;
  }

  async remove(id: number, user_id: number) {
    const data = await this.connectionsRepository.findOne({
      where: { id },
    });
    if (data.user_id == user_id) {
      this.connectionsRepository
        .destroy({ where: { id } })
        .then(() => {
          return this.findAll(user_id);
        })
        .catch((e) => {
          return e;
        });
    }
  }
}
