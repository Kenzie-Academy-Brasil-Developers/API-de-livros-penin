interface Books {
    id: number;
    name: string;
    pages: number;
    category: Text;
    createdAt: Date;
    ubdateAt: Date;
}

type createBook = Pick<Books, "name" | "pages" | "category">;

type UpdateBooks = Partial<createBook>;

export {Books, createBook, UpdateBooks};