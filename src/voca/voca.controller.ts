import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('voca')
export class VocaController {
  @Get()
  getAll() {
    return 'words';
  }

  @Post()
  create(@Body() voca) {
    console.log(voca);
    return 200;
  }
}
