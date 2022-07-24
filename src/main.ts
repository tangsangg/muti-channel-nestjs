import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
   const appOptions = {cors:true}
  const app = await NestFactory.create(AppModule,appOptions);
  app.setGlobalPrefix('api')
  const options = new DocumentBuilder()
      .setTitle('createChannel')
      .setDescription('an example')
      .setVersion('1.0')
      .setBasePath('api')
      .addBearerAuth()
      .build()
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('/docs',app,document)
  console.log('success')
  await app.listen(3000);
}
bootstrap();
