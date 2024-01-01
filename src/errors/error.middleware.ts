import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErrors";

export class GlobalErrors {
    handleErrors = (
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): Response => {

     if(err instanceof AppError){
      return res.status(err.statusCode).json({ error: err.message});
      }
      return res.status(500).json({ error: "internal serve error."});
    };
}