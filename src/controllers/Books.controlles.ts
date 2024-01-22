import { Request, Response } from "express";
import { BookServices } from "../services/Books.services";

export class BookControllers {
  static getBooks(request: Request, response: Response): Response {
    const findBooks = request.query.search as string | undefined;
    const books = BookServices.getBooks(findBooks);
    return response.status(200).json(books);
  }

  static getBook(request: Request, response: Response): Response {
    return response.status(200).json(BookServices.getBook(request.params.id));
  }

  static createBook(request: Request, response: Response): Response {
    const reqBook = request.body;
    return response
      .status(201)
      .json(
        BookServices.createBook(reqBook.name, reqBook.pages, reqBook.category)
      );
  }

  static updateBook(request: Request, response: Response): Response {
    return response
      .status(200)
      .json(BookServices.updateBook(request.params.id, request.body));
  }
  static deleteBook(request: Request, response: Response): Response {
    return response
      .status(204)
      .json(BookServices.deleteBook(request.params.id));
  }
}
