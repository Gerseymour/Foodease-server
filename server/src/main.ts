import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
  await app.listen(PORT, () => {
    console.log(`server is running on ${PORT}🎉`)});
  }catch (err) {
    console.log('error', err)
  }
}
bootstrap();
