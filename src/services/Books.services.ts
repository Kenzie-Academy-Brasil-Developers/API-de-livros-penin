import { Books, CreateBook, UpdateBook } from "../interfaces/books.interfaces";
import { generateId } from "../utils";
import { booksDatabase } from "../database/database";

export class BookService {

    createBook(data: CreateBook): Books {
        const newBooks: Books = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        booksDatabase.push(newBooks);

        return newBooks;
    }

    updateBook(index: number, data: UpdateBook): Books{
       

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        };

        return booksDatabase[index];

    }

    deleteBook( index:number): void{
        booksDatabase.splice(index, 1);
    }

}