import 'dotenv/config';
import 'reflect-metadata';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
}
bootstrap();
