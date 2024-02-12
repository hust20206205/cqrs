import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


import { classToPlain } from 'class-transformer';
import { CreateProductDto } from '../dto/create-product.dto';
import { ResponseProductDto } from '../dto/response-product.dto';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from 'src/product/core/application/commands/create-product/create-product.command';
import { FindAllProductPort } from 'src/product/core/application/queries/find-all-product/find-all-product.port';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Tạo sản phẩm mới' })
  @ApiResponse({ status: 201, type: ResponseProductDto })
  @ApiBody({ type: CreateProductDto })
  async create(@Body() createProductDto: CreateProductDto) {
    const newProduct = await this.commandBus.execute(
      new CreateProductCommand(createProductDto.name),
    );
    return classToPlain(new ResponseProductDto(newProduct));
  }

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả sản phẩm' })
  @ApiResponse({ status: 200, type: [ResponseProductDto] })
  async findAll() {
    const existProduct = await this.queryBus.execute(
      new FindAllProductPort(),
    );
    return classToPlain(new ResponseProductDto(existProduct));
  }

  //   @Get(':id')
  //   @ApiOperation({ summary: 'Lấy sản phẩm theo id' })
  //   @ApiResponse({ status: 200, type: ResponseProductDto })
  //   @ApiParam({ name: 'id', required: true })
  //   async findOne(@Param('id') id: string): Promise<Product> {
  //     return await this.productService.findOne(id);
  //   }

  //   @Put(':id')
  //   @ApiOperation({ summary: 'Cập nhật sản phẩm theo id' })
  //   @ApiResponse({ status: 200, type: ResponseProductDto })
  //   @ApiParam({ name: 'id', required: true })
  //   @ApiBody({ type: UpdateProductDto })
  //   async update(
  //     @Param('id') id: string,
  //     @Body() updateProductDto: UpdateProductDto,
  //   ): Promise<Product> {
  //     return await this.productService.update(id, updateProductDto);
  //   }

  //   @Delete(':id')
  //   @ApiOperation({ summary: 'Xóa sản phẩm theo id' })
  //   @ApiResponse({ status: 200 })
  //   @ApiParam({ name: 'id', required: true })
  //   async remove(@Param('id') id: string): Promise<void> {
  //     return await this.productService.remove(id);
  //   }
}
