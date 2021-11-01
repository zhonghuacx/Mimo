import { Module } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { ConnectionsController } from './connections.controller';
import { ConnectionsProviders } from './connections.providers';

@Module({
  controllers: [ConnectionsController],
  providers: [ConnectionsService,...ConnectionsProviders]
})
export class ConnectionsModule {}
