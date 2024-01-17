import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErrors";
import { requestSchema } from "../interfaces/books.interfaces";
import { ZodError } from "zod";

export class verifyBookName {
  static execute(request: Request, response: Response, next: NextFunction) {
    const verifyName = booksDatabase.some(
      (book) => book.name === request.body.name
    );

    if (verifyName) {
      throw new AppError(409, "Book already registered.");
    }
    return next();
  }
}

export class verifyBookId {
  static execute(request: Request, response: Response, next: NextFunction) {
    const checkBookId = booksDatabase.some(
      (book) => book.id === Number(request.params.id)
    );

    if (!checkBookId) {
      throw new AppError(404, "Book not found.");
    }
    return next();
  }
}

export class validateBody {
  static execute(schemas: Partial<requestSchema>){
    return async (request: Request, response: Response, next: NextFunction) =>{
      try {
        if(schemas.params){
          request.params = await schemas.params.parseAsync(request.params)
        }
        if(schemas.body){
          request.body = await schemas.body.parseAsync(request.body)
        }
        if(schemas.query){
          request.query = await schemas.query.parseAsync(request.query)
        }
        return next();
      } catch (error) {
        if (error instanceof ZodError){
          return response.status(409).json(error);
        }
      }
    }
  }
}
