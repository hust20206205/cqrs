import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';


import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';






import { CreateProductDto } from '../dto/create-product.dto';
import { ResponseProductDto } from '../dto/response-product.dto';

@Controller('product')
export class ProductController {
  // constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo sản phẩm mới' })
  @ApiResponse({ status: 201, type: ResponseProductDto })
  @ApiBody({ type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return 'this.productService.create(createProductDto);';
    // return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả sản phẩm' })
  @ApiResponse({ status: 200, type: [ResponseProductDto] })
  findAll() {
    return 'this.productService.findAll();';
    // return this.productService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}
