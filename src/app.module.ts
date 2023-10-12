import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RawIngredientsModule } from './raw-ingredients/raw-ingredients.module';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RawIngredientsModule,
  ],
})
export class AppModule {}
