import { CreateProductCommandHandler } from "./commands/create-product/create-product.command-handler";

const ProductQueryHandlers: any[] = [];
const ProductCommandHandlers: any[] = [CreateProductCommandHandler];

export const ProductApplications = [
  ...ProductQueryHandlers,
  ...ProductCommandHandlers,
];
