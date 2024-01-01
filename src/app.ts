import express, { json } from "express";
import { booksRouter } from "./Routes/books.routes";
import { GlobalErrors } from "./errors/error.middleware";

export const app = express();
const globalErrors = new GlobalErrors();

app.use(json());

app.use("/books", booksRouter);

app.use(globalErrors.handleErrors);