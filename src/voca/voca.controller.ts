import { Body, Controller, Get, Post } from '@nestjs/common';
import { VocaService } from './voca.service';

@Controller('voca')
export class VocaController {
  constructor(private readonly vocaService: VocaService) {}

  @Get()
  async getAll() {
    return this.vocaService.getAllWords();
  }

  @Post()
  async create(@Body() body: { word: string; meaning: string }) {
    return this.vocaService.createWord(body.word, body.meaning);
  }
}
