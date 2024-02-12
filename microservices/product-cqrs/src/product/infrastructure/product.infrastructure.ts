import { ProductEntity } from './database/entities/product.entity';

export const ProductInfrastructure = {
  providers: [
    // {
    //   provide: FindAlarmRepository,
    //   useClass: OrmFindAlarmRepository,
    // },
  ],
  repositories: [ProductEntity],
};
