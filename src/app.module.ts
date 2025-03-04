import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocaModule } from './voca/voca.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VocaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
