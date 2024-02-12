import { ProductName } from '../value-objects/product-name';
import { AggregateRoot } from './aggregate-root';

export class Product extends AggregateRoot<string> {
  name: ProductName;
  createdAt: Date;

  constructor(id: string) {
    super(id);
  }

  static Builder(id: string): ProductBuilder {
    return new ProductBuilder(id);
  }
}

//       Factory
class ProductBuilder {
  private product: Product;

  constructor(id: string) {
    this.product = new Product(id);
  }

  withName(name: ProductName): ProductBuilder {
    this.product.name = name;
    return this;
  }

  withCreatedAt(date: Date): ProductBuilder {
    this.product.createdAt = date;
    return this;
  }

  build(): Product {
    return this.product;
  }
}
// const product = Product.Builder("product_id")
//     .withName(new ProductName("Product Name"))
//     .withCreatedAt(new Date())
//     .build();
// console.log(product);
