import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// import { Module } from '@nestjs/common';
// import { UserModule } from './user/infrastructure/user.module';
// import { MariaDBTypeOrmClient } from './shared/infrastructure/persistence/typeorm/MariaDBTypeOrmClient';
// import { APP_FILTER } from '@nestjs/core';
// import { AllExceptionFilter } from './shared/infrastructure/all-exception.filter';
// import { ConfigModule } from '@nestjs/config';
// import * as Joi from '@hapi/joi';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       validationSchema: Joi.object({
//         DATABASE_NAME: Joi.string().required(),
//         DATABASE_USERNAME: Joi.string().required(),
//         DATABASE_PASSWORD: Joi.string().required(),
//       }),
//     }),
//     MariaDBTypeOrmClient.create(),
//     UserModule,
//   ],
//   providers: [
//     {
//       provide: APP_FILTER,
//       useClass: AllExceptionFilter,
//     },
//   ],
// })
// export class AppModule {}
