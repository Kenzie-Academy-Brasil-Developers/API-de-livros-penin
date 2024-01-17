import { Book, createBook, updateBook } from "../interfaces/books.interfaces";
import { generateId } from "../utils";
import { booksDatabase } from "../database/database";

export class BookServices {
  static createBook = (name: string, pages: string, category?: string) => {
    const newBook: Book = {
      id: generateId(),
      name: name,
      pages: Number(pages),
      category: category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    booksDatabase.push(newBook);
    return newBook;
  };

 static getBook(id: string) {
    const getSingleBook = booksDatabase.find(
      (product) => product.id === Number(id)
    );
    return getSingleBook;
  }

 static getBooks = (query?: string | undefined) => {
    if (query) {
      return booksDatabase.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return booksDatabase;
  };

  static updateBook = (id: string, body?: updateBook): Book => {
    const index = booksDatabase.findIndex((book)=> book.id === Number(id));

    const upBookNew: Book = {
      ...booksDatabase[index],
      ...body,
      updatedAt: new Date()
    }

    booksDatabase.splice(index, 1, upBookNew)
    return upBookNew;
  };

 static deleteBook = (id: string) => {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));
    return booksDatabase.splice(index, 1)
  }
}