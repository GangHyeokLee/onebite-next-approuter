import BookItem from "@/components/book-item";
import {BookData} from "@/type";
import {delay} from "@/util/delay";

export default async function Page(
    {searchParams}: {
        searchParams: {
            q?: string;
        };
    }) {
    await delay(5000);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`, {cache: "force-cache"});

    if (!response.ok) {
        return <div>오류가 발생했습니다.</div>
    }

    const books: BookData[] = await response.json();

    return (
        <div>
            {books.filter(book => book.title.includes(searchParams.q)).map((book) => <BookItem
                key={book.id} {...book} />)}
        </div>
    )
}