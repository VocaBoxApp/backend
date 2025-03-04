import { Module } from '@nestjs/common';
import { VocaService } from './voca.service';
import { VocaController } from './voca.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [VocaService],
  controllers: [VocaController],
})
export class VocaModule {}
