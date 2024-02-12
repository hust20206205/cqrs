import { Product } from 'src/product/core/domain/entities/product';

export abstract class CreateProductPort {
  abstract save(product: Product): Promise<Product>;
}
