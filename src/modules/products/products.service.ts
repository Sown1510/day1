import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import path from 'path';
import fs from 'fs';

@Injectable()
export class ProductsService {
  private products:any[];
  constructor(){
    this.loadProducts();
  }

  private loadProducts() {
    const filePath = path.join(__dirname, '../../data/products.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.products = JSON.parse(data);
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
