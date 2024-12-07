import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto} from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'Hello there!';
  }

  @Post()
  creatMessage(@Body() body: CreateMessageDto) {
    return body['content'];
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    return 'Hello there!';
  }
}
