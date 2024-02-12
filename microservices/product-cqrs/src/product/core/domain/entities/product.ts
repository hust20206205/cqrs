import { AggregateRoot } from './aggregate-root';




import { ProductName } from '../value-objects/product-name';




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

  withName(name: string): ProductBuilder {
    this.product.name = new ProductName(name)
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
//     .withName("Product Name")
//     .withCreatedAt(new Date())
//     .build();
// console.log(product);
