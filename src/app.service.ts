import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Book, { IBook, IBookDocument } from './models/Book';

export interface GetBooksParams {
  limit?: string,
  start?: string,
}

@Injectable()
export class AppService {
  async getBooks(params: GetBooksParams): Promise<Array<IBook>> {
    const query = Book.find().sort({ createdAt: 'desc' });
    query.limit(parseInt(params.limit) || 500);
    query.skip(parseInt(params.start) || 0);
    return await query;
  }

  async saveBooks(books: Array<IBook>): Promise<Array<IBookDocument>> {
    if (!books.length) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Request body must contain an array at path `books`.',
      }, HttpStatus.BAD_REQUEST);
    }
    return await Promise.all(books.map(async (book: IBook) => {
      const bookBaseObject = {
        author: book.author,
        publishedAt: book.publishedAt,
        pages: book.pages,
        title: book.title,
      } as IBook;
      return Book.create(bookBaseObject);
    }));
  }
}
