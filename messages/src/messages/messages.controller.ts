import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'Hello there!';
  }

  @Post()
  creatMessage(@Body() body: string) {
    return body['content'];
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    return 'Hello there!';
  }
}
