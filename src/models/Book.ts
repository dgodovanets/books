import { Schema, Model, Document, model } from 'mongoose';

export interface IBook {
  author: string,
  publishedAt: Date,
  pages: number,
  title: string,

  createdAt?: Date,
}

export interface IBookDocument extends IBook, Document {};

interface IBookModel extends Model<IBookDocument> {};

const BookSchema = new Schema(
  {
    author: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    pages: { type: Number, required: true },
    title: { type: String, required: true },
  },
  { timestamps: true },
);

BookSchema.index({ createdAt: 1 });

const Book: IBookModel = model<IBookDocument, IBookModel>('Book', BookSchema);
export default Book;
