import { ProductEntity } from './database/entities/product.entity';
import { CreateProductPort } from '../core/application/commands/create-product/create-product.port';
import { OrmProductRepository } from './database/repositories/product.repository';

export const ProductInfrastructure = {
  providers: [
    {
      provide: CreateProductPort,
      useClass: OrmProductRepository,
    },
  ],
  repositories: [ProductEntity],
};
