import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocaModule } from './voca/voca.module';

@Module({
  imports: [VocaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
