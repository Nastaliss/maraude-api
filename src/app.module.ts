import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const DECLARED_MODULES = [];

@Module({
  imports: [...DECLARED_MODULES],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
