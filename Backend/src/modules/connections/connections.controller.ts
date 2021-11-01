import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { Connections } from './entities/connection.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('add_Connection')
  async create(@Request() req, @Body() Connection: Connections) {
    Connection.user_id = req.user.id;
    return await this.connectionsService.create(Connection);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.connectionsService
      .findAll(req.user.id)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  }

  // @Post()
  // create(@Body() createConnectionDto: CreateConnectionDto) {
  //   return this.connectionsService.create(createConnectionDto);
  // }

  // @Get()
  // findAll() {
  //   return this.connectionsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectionDto: UpdateConnectionDto,
  ) {
    return this.connectionsService.update(+id, updateConnectionDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.connectionsService.remove(+id);
  // }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  remove(@Request() req, @Body() body: any) {
    return this.connectionsService.remove(body.id, req.user.id);
  }
}
