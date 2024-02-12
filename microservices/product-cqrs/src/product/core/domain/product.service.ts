import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class ProductService {
  constructor(
    // @InjectRepository(Product)
    // private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductCommand: CreateProductCommand): Promise<Product> {
    // import { randomUUID } from 'crypto';
    // const newProduct = this.productRepository.create(createProductDto);

    // return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    // return await this.productRepository.find();
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
 
