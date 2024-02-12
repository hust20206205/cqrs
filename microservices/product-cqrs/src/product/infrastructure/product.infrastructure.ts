import { ProductEntity } from './database/entities/product.entity';
import { CreateProductPort } from '../core/application/commands/create-product/create-product.port';
import { OrmProductRepository } from './database/repositories/product.repository';
import { FindAllProductPort } from '../core/application/queries/find-all-product/find-all-product.port';

export const ProductInfrastructure = {
  providers: [
    {
      provide: CreateProductPort,
      useClass: OrmProductRepository,
    },
    {
      provide: FindAllProductPort,
      useClass: OrmProductRepository,
    },
  ],
  repositories: [ProductEntity],
};
