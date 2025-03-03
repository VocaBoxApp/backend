import { Module } from '@nestjs/common';
import { VocaService } from './voca.service';
import { VocaController } from './voca.controller';

@Module({
  providers: [VocaService],
  controllers: [VocaController],
})
export class VocaModule {}
