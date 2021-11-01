import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';

import { RoomsModule } from '../rooms/rooms.module';
// import { RoomsService } from '../rooms/rooms.service';



@Module({
  providers: [ChatGateway, ChatService, RoomsModule],
})
export class ChatModule { }
