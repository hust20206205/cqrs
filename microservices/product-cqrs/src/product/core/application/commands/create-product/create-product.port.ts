export abstract class CreateProductPort {
    abstract save(product: Product): Promise<Product>;
}
