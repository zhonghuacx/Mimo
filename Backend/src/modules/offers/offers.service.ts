import { Injectable, Inject } from '@nestjs/common';
import { OFFERS_REPOSITORY } from 'src/core/constants';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @Inject(OFFERS_REPOSITORY)
    private readonly activityRepository: typeof Offer,
  ) {}

  async create(Offer): Promise<Offer> {
    return await this.activityRepository.create<Offer>(Offer);
  }

  async findAll(): Promise<Offer[]> {
    return await this.activityRepository.findAll<Offer>();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
