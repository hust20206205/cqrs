import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from './create-product.command';
import { CreateProductPort } from './create-product.port';

import { Product } from 'src/product/core/domain/entities/product';

import { ProductName } from './../../../domain/value-objects/product-name';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly createProductPort: CreateProductPort) {}

  private readonly logger = new Logger(CreateProductCommandHandler.name);

  public async execute({ name }: CreateProductCommand) {
    this.logger.log(`> CreateProductCommand: called`);

    const product = Product.Builder('product_id')
      .withName(new ProductName('Product Name'))
      .withCreatedAt(new Date())
      .build();

    return this.createProductPort.save(product)
  }
}
