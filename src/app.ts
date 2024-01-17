import "express-async-errors"
import express, { json } from "express";
import { booksRouter } from "./Routes/books.routes";
import { GlobalErrors } from "./errors/error.middleware";
import helmet from "helmet";

export const app = express();
app.use(helmet());
app.use(json());

const globalErrors = new GlobalErrors();

app.use("/books", booksRouter);

app.use(globalErrors.handleErrors);
