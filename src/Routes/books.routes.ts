import { Router } from "express";
import { BookControllers } from "../controllers/Books.controlles";
import { bookCreateSchema, bookUpdateSchema } from "../schema/books.schema";
import {
  validateBody,
  verifyBookId,
  verifyBookName,
} from "../middlewares/books.middlewares";

export const booksRouter = Router();

booksRouter.post(
  "/",
  verifyBookName.execute,
  validateBody.execute({ body: bookCreateSchema }),
  BookControllers.createBook
);

booksRouter.get("/", BookControllers.getBooks);

booksRouter.get("/:id", verifyBookId.execute, BookControllers.getBook);

booksRouter.patch(
  "/:id",
  verifyBookId.execute,
  verifyBookName.execute,
  validateBody.execute({ body: bookUpdateSchema }),
  BookControllers.updateBook
);

booksRouter.delete("/:id", verifyBookId.execute, BookControllers.deleteBook);
