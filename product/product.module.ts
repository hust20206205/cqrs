import { Module } from '@nestjs/common';
import { ProductService } from './core/domain/product.service';
import { ProductController } from './interface/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/orm/entities/product.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductInfrastructure } from './infrastructure/product.infrastructure';
import { ProductInterface } from './interface/product.interface';
import { ProductApplications } from './core/application/product.application';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([...ProductInfrastructure.repositories]),
  ],
  controllers: [...ProductInterface.controllers],
  providers: [
    // ...ProductInterface.resolvers,
    // ...ProductInfrastructure.providers,
    ...ProductApplications,
    // ProductService
  ],
  exports: [],
})
export class ProductModule {}
