import BookItem from "@/components/book-item";
import {BookData} from "@/type";
import {delay} from "@/util/delay";
import {Suspense} from "react";
import LoadingDeprecated from "@/app/(with-searchbar)/search/loading-deprecated";

async function SearchResult({q}: { q: string }) {
    await delay(1500);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {cache: "force-cache"});

    if (!response.ok) {
        return <div>오류가 발생했습니다.</div>
    }

    const books: BookData[] = await response.json();

    return (
        <div>
            {books.filter(book => book.title.includes(q)).map((book) => <BookItem
                key={book.id} {...book} />)}
        </div>
    )
}

export default function Page(
    {searchParams}: {
        searchParams: {
            q?: string;
        };
    }) {
    return (
        <Suspense key={searchParams.q || ""} fallback={<LoadingDeprecated/>}>
            <SearchResult q={searchParams.q || ""}/>
        </Suspense>
    )
}