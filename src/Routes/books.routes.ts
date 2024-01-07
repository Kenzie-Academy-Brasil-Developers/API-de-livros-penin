import { Router } from "express";
import { BookControllers } from "../controllers/Books.controlles";
import { BookMiddlewares } from "../middlewares/books.middlewares";

export const booksRouter = Router();

const bookController = new BookControllers();
const bookMiddlewares = new BookMiddlewares();

booksRouter.post("/", bookMiddlewares.verifyBooks, bookController.createBook);
booksRouter.get("/", bookController.getBooks);

booksRouter.use("/:id", bookMiddlewares.Books);

booksRouter.get("/:id", bookController.retriveBook);
booksRouter.patch(
  "/:id",
  bookMiddlewares.verifyBooks,
  bookController.updateBook
);
booksRouter.delete("/:id", bookController.deleteBook);
