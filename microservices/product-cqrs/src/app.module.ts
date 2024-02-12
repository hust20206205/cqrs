import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

// import { MariaDBTypeOrmClient } from './shared/infrastructure/persistence/typeorm/MariaDBTypeOrmClient';
// import { APP_FILTER } from '@nestjs/core';
// import { AllExceptionFilter } from './shared/infrastructure/all-exception.filter';
// import { ConfigModule } from '@nestjs/config';
// import * as Joi from '@hapi/joi';
import { DatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //       validationSchema: Joi.object({
      //         DATABASE_NAME: Joi.string().required(),
      //         DATABASE_USERNAME: Joi.string().required(),
      //         DATABASE_PASSWORD: Joi.string().required(),
      //       }),
    }),
    DatabaseConfig.init(),
    ProductModule,
  ],
  controllers: [],
  providers: [],
  //   providers: [
  //     {
  //       provide: APP_FILTER,
  //       useClass: AllExceptionFilter,
  //     },
})
export class AppModule {}
