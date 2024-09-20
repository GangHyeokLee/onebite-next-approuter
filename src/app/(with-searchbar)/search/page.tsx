import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Page({searchParams}:{
    searchParams:{
        q?:string;
    };
}){

    return (
        <div>
            {books.filter(book => book.title.includes(searchParams.q)).map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    )
}