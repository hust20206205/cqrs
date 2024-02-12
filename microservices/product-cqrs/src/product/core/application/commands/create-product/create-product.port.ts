import { Product } from './../../../../infrastructure/entities/product.entity';
export abstract class CreateProductPort {
  abstract save(product: Product): Promise<Product>;
}
