import { AnyZodObject, z } from "zod";
import {
  bookCreateSchema,
  bookSchema,
  bookUpdateSchema,
} from "../schema/books.schema";

export interface requestSchema {
  params: AnyZodObject;
  body: AnyZodObject;
  query: AnyZodObject;
}

export type Book = z.infer<typeof bookSchema>;
export type createBook = z.infer<typeof bookCreateSchema>;
export type updateBook = z.infer<typeof bookUpdateSchema>;
