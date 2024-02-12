import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductApplications } from './core/application/product.application';
import { ProductInfrastructure } from './infrastructure/product.infrastructure';
import { ProductInterface } from './interface/product.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([...ProductInfrastructure.repositories]),
    CqrsModule,
  ],
  providers: [
    ...ProductInterface.resolvers,
    ...ProductInfrastructure.providers,
    ...ProductApplications,
  ],
  controllers: [...ProductInterface.controllers],
  exports: [],
})
export class ProductModule {}
