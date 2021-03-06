import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:8080',
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
