import { Module } from '@nestjs/common';
import { ProductService } from './core/domain/product.service';
import { ProductController } from './interface/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './infrastructure/entities/product.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductInterface } from './interface/product.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    // TypeOrmModule.forFeature([...ProductInfrastructure.repositories]),
    CqrsModule,
  
  
  
  
  
  
  
  ],
  controllers: [...ProductInterface.controllers],
  providers: [ProductService,
    // ...ProductInterface.resolvers,
    // ...ProductInfrastructure.providers,
    // ...ProductApplications,
  ],
  exports: [],
})
export class ProductModule {}
