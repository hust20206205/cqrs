import { Module } from '@nestjs/common';
import { ProductService } from './core/domain/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductInterface } from './interface/product.interface';
import { ProductInfrastructure } from './infrastructure/product.infrastructure';
import { ProductApplications } from './core/application/product.application';

@Module({
  imports: [
    TypeOrmModule.forFeature([...ProductInfrastructure.repositories]),
    CqrsModule,
  ],
  controllers: [...ProductInterface.controllers],
  providers: [
    ProductService,
    // ...ProductInterface.resolvers,
    ...ProductInfrastructure.providers,
    ...ProductApplications,
  ],
  exports: [],
})
export class ProductModule {}
