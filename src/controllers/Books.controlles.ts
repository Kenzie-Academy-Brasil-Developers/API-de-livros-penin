import { Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { BookService } from "../services/Books.services";

export class BookControllers {
  private bookService = new BookService();

  createBook = (req: Request, res: Response): Response => {
    return res.status(201).json(this.bookService.createBook(req.body));
  };

  getBooks(req: Request, res: Response): Response {
    return res.status(200).json(booksDatabase);
  }

  retriveBook(req: Request, res: Response): Response {
    const index = res.locals.bookIndex;

    return res.status(200).json(booksDatabase[index]);
  }

  updateBook = (req: Request, res: Response): Response => {
    const index = res.locals.bookIndex;

    return res.status(200).json(this.bookService.updateBook(index, req.body));
  };

  deleteBook = (req: Request, res: Response): Response => {
    const index = res.locals.bookIndex;

    this.bookService.deleteBook(index);

    return res.status(204).send();
  };
}
