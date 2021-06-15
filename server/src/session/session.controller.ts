import { Controller, Delete, Param, Post, Put, Body, Get } from '@nestjs/common';
import { FoodDto } from '../menu/create-menu.dto';
import { SessionService } from './session.service';
import { Session } from './session.interface';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('/:id1/:id2/:menu')
  async createSession(
    @Param('id1') id1,
    @Param('id2') id2,
    @Param('menu') menu,
  ): Promise<Session> {
    return this.sessionService.createSession(id1, id2, menu)
  }

  @Get(':id')
  async getSession(@Param('id') id): Promise<Session> {
    return this.sessionService.getSession(id);
  }


  @Put(':id')
  async updateSession(
    @Param('id') id,
    @Body() FoodDto: [FoodDto],
  ): Promise<any> {

    console.log('controller', FoodDto)
    return this.sessionService.updateSession(id, FoodDto)
  }

  // @Delete()
  // async deleteSession(): Promise<Session> {
  //   return this.sessionService.deleteSession()
  // }

}
