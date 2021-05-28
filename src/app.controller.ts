import { Query } from '@nestjs/common';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService, GetBooksParams } from './app.service';
import { IBook, IBookDocument } from './models/Book';

@Controller('api/books')
export class BooksController {
  constructor(private readonly appService: AppService) {}

  @Get()
  find(@Query() query): Promise<IBook[]> {
    return this.appService.getBooks(query as GetBooksParams);
  }

  @Post()
  save(@Body() body): Promise<IBookDocument[]> {
    return this.appService.saveBooks(body.books as Array<IBook>);
  }
}
