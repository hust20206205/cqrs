import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
