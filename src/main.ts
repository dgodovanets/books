import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';
import { connect } from 'mongoose';

async function bootstrap() {
  await connect(config.mongoDB.connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
