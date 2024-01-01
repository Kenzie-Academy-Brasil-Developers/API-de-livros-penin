interface Books {
    id: number;
    name: string;
    pages: number;
    category: Text;
    createdAt: Date;
    updatedAt: Date;

}

type CreateBook = Pick<Books, "name" | "pages"| "category">;

type UpdateBook = Partial<CreateBook>;

export {Books, CreateBook, UpdateBook};