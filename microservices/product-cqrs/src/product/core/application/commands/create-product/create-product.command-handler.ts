import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from './create-product.command';
import { CreateProductPort } from './create-product.port';

import { Product } from 'src/product/core/domain/entities/product';

import { randomUUID } from 'crypto';
import { ProductName } from './../../../domain/value-objects/product-name';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly createProductPort: CreateProductPort) {}

  private readonly logger = new Logger(CreateProductCommandHandler.name);

  public async execute({ name }: CreateProductCommand) {
      this.logger.log(`> CreateProductCommand: called`);

      const product = Product.Builder(randomUUID())
        .withName(new ProductName(name))
        .withCreatedAt(new Date())
        .build();

      return this.createProductPort.save(product);
  }
}
