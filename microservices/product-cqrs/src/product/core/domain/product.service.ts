import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from '../../infrastructure/entities/product.entity';

import { CreateProductDto } from '../../interface/dto/create-product.dto';
import { UpdateProductDto } from '../interface/dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);

    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  //   async findOne(id: string): Promise<Product> {
  //     return await this.productRepository.findOneBy({ productId: id });
  //   }

  //   async update(
  //     id: string,
  //     updateProductDto: UpdateProductDto,
  //   ): Promise<Product> {
  //     await this.productRepository.update(id, updateProductDto);
  //     return await this.productRepository.findOneBy({ productId: id });
  //   }

  //   async remove(id: string): Promise<void> {
  //     await this.productRepository.delete(id);
  //   }
}
// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

// import { ProductEntity as ProductI } from '../../../../../../product/infrastructure/orm/entities/product.entity';
// import { CreateProductCommand } from '../../../../../../product/core/application/commands/create-product/create-product.command';
// import { Product } from './entities/product';
// import { ProductName } from './value-objects/product-name';
// import { randomUUID } from 'crypto';

// // import { CreateProductDto } from '../interface/dto/create-product.dto';
// // import { UpdateProductDto } from '../interface/dto/update-product.dto';

// @Injectable()
// export class ProductService {
//   constructor(
//     @InjectRepository(ProductI)
//     private readonly productRepository: Repository<ProductI>,
//   ) {}
//   async create(createProductCommand: CreateProductCommand) {
//     try {
//       const newProduct = Product.Builder(randomUUID())
//         .withName(new ProductName(createProductCommand.name))
//         .withCreatedAt(new Date())
//         .build();
//       console.log(newProduct);
//       return newProduct;
//       // const newProduct = this.productRepository.create(
//       //   createProductCommand.name
//       // );

//       // return await this.productRepository.save(newProduct);
//       // }
//     } catch (error) {
//       return { error: error.message };
//     }
//   }

//   async findAll() {
//     return await this.productRepository.find();
//   }

//   // async findOne(id: string): Promise<Product> {
//   //   return await this.productRepository.findOneBy({ productId: id });
//   // }

//   // async update(
//   //   id: string,
//   //   updateProductDto: UpdateProductDto,
//   // ): Promise<Product> {
//   //   await this.productRepository.update(id, updateProductDto);
//   //   return await this.productRepository.findOneBy({ productId: id });
//   // }

//   // async remove(id: string): Promise<void> {
//   //   await this.productRepository.delete(id);
//   // }
// }
