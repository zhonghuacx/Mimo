import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';
import { Observable } from 'rxjs';

import { JwtService } from '../auth/jwt/jwt.service';
import { RoomsService } from '../rooms/rooms.service';
import { User } from '../users/entities/user.entity';

@WebSocketGateway(1080, { namespace: 'rooms' })

export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server;

  connectedUsers: string[] = [];


  constructor(
    private jwtService: JwtService,
    private roomService: RoomsService
  ) {}

  async handleConnection(socket) {
    const user: User = await this.jwtService.verify(
      socket.handshake.query.token,
      true
    );

    this.connectedUsers = [...this.connectedUsers, String(user.id)];

    // Send list of connected users
    this.server.emit('users', this.connectedUsers);
  }

  async handleDisconnect(socket) {
    const user: User = await this.jwtService.verify(
      socket.handshake.query.token,
      true
    );
    const userPos = this.connectedUsers.indexOf(String(user.id));

    if (userPos > -1) {
      this.connectedUsers = [
        ...this.connectedUsers.slice(0, userPos),
        ...this.connectedUsers.slice(userPos + 1)
      ];
    }

    // Sends the new list of connected users
    this.server.emit('users', this.connectedUsers);
  }

  @SubscribeMessage('message')
  async onMessage(client, data: any) {
    const event: string = 'message';
    const result = data[0];

    await this.roomService.addMessage(result.message, result.room);
    client.broadcast.to(result.room).emit(event, result.message);

    return Observable.create(observer =>
      observer.next({ event, data: result.message })
    );
  }

  @SubscribeMessage('join')
  async onRoomJoin(client, data: any): Promise<any> {
    client.join(data[0]);

    const messages = await this.roomService.findMessages(data, 25);

    // Send last messages to the connected user
    client.emit('message', messages);
  }

  @SubscribeMessage('leave')
  onRoomLeave(client, data: any): void {
    client.leave(data[0]);
  }
}

// export class ChatGateway {
//   constructor(private readonly chatService: ChatService) {}




  // @SubscribeMessage('createChat')
  // create(@MessageBody() createChatDto: CreateChatDto) {
  //   return this.chatService.create(createChatDto);
  // }

  // @SubscribeMessage('findAllChat')
  // findAll() {
  //   return this.chatService.findAll();
  // }

  // @SubscribeMessage('findOneChat')
  // findOne(@MessageBody() id: number) {
  //   return this.chatService.findOne(id);
  // }

  // @SubscribeMessage('updateChat')
  // update(@MessageBody() updateChatDto: UpdateChatDto) {
  //   return this.chatService.update(updateChatDto.id, updateChatDto);
  // }

  // @SubscribeMessage('removeChat')
  // remove(@MessageBody() id: number) {
  //   return this.chatService.remove(id);
  // }
// }
