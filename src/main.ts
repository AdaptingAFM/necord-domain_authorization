import 'dotenv/config';
import 'reflect-metadata';

import { AppModule } from './app.module';
import { NecordExceptionsFilter } from 'src/shared';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new NecordExceptionsFilter());

  app.init();
}
bootstrap();
