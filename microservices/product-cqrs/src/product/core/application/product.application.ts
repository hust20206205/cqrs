import { CreateProductCommandHandler } from './commands/create-product/create-product.command-handler';
import { FindAllProductQueryHandler } from './queries/find-all-product/find-all-product.query-handler';

const ProductQueryHandlers: any[] = [FindAllProductQueryHandler];
const ProductCommandHandlers: any[] = [CreateProductCommandHandler];

export const ProductApplications = [
  ...ProductQueryHandlers,
  ...ProductCommandHandlers,
];
