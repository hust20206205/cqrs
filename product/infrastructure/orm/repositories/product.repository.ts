import { Repository } from 'typeorm';
import { Product } from '../../../core/domain/entities/product';
import { CreateProductPort } from 'src/product/core/application/commands/create-product/create-product.port';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { ProductAdapter } from '../mappers/product.adapter';

@Injectable()
export class OrmProductRepository implements CreateProductPort {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async save(product: Product): Promise<Product> {
    const persistenceModel = ProductAdapter.toPersistence(product);
    const newEntity = await this.productRepository.save(persistenceModel);
    return ProductAdapter.toDomain(newEntity);
  }

  // async findAll(): Promise<productReadModel[]> {
  //     return await this.productModel.find();
  //   }
  // }
}
