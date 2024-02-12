import { Exclude, Expose, Transform } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import * as faker from 'faker';

export class ResponseProductDto {
  @ApiProperty({
    description: 'Định danh của sản phẩm',
    example: faker.datatype.uuid(),
  })
  productId() {
    this._id;
  }
  @Expose({ name: 'productId' })
  _id: string;
// 
// 
// 
// 
// 
// 
// 
// 
  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: faker.commerce.productName(),
  })
  @Transform((name) => name.value)
  @Expose({ name: 'name' })
  name: string;
  // name: { value: string };
  // _id: string;

  // name: string;
  // @Expose() // Exposing the name field without changes
  // name: { value: string };

  // @Expose({ name: 'name' })
  // // name: string;
  // // @Expose() // Exposing the name field without changes
  // name: { value: string };
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

  @ApiProperty({
    description: 'Ngày tạo sản phẩm',
    example: faker.date.past(),
  })
  createdAt: Date;
// 
// 
// 
// 
// 
// 
// 
// 

  constructor(partial: Partial<ResponseProductDto>) {
    Object.assign(this, partial);
  }
}
