import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.setGlobalPrefix('api');
  const option = new DocumentBuilder()
                    .setTitle("Demo Document API Phim")
                    .setDescription('lấy thông tin của một phim')
                    .setVersion('0.0.1')
                    .build()
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
