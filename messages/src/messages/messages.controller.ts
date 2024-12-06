import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'Hello there!';
  }

  @Post()
  creatMessage() {
    return 'Hello there!';
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    return 'Hello there!';
  }
}
