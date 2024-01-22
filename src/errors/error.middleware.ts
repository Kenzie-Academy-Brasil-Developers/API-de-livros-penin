import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErrors";
import { AnyZodObject, ZodError } from "zod";

export class GlobalErrors {
  handleErrors = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    if (err instanceof ZodError) {
      return res.status(409).json(err);
    }

    console.log(err);

    return res.status(500).json({ error: "internal server error." });
  };

  validBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = await schema.parseAsync(req.body);
      return next();
    };
  };
}
