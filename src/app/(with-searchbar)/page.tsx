import BookItem from "@/components/book-item";
import {BookData} from "@/type";

// export const dynamic="";
// 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정
// 1. auto: 기본값, 아무것도 강제하지 않음
// 2. force-dynamic: 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static: 페이지를 강제로 static 페이지로 설정
// 4. error: 페이지를 강제로 Static 페이지로 설정 (설정하면 안 되는 이유 -> 빌드오류)

async function AllBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);

    if (!response.ok) {
        return <div>오류가 발생했습니다.</div>;
    }
    const allBooks: BookData[] = await response.json();

    return (
        <>
            {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
        </>
    )
}

async function RecoBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {next: {revalidate: 3}});
    const recoBooks: BookData[] = await response.json();

    return (
        <>
            {recoBooks.map((book) => <BookItem key={book.id} {...book} />)}
        </>
    )
}

export default async function Home() {


    return (
        <div className="d-flex flex-column" style={{gap: "20px"}}>
            <section>
                <h3 className="fw-bold mb-5">지금 추천하는 도서</h3>
                <RecoBooks/>
            </section>
            <section>
                <h3 className="fw-bold mb-5">등록된 모든 도서</h3>
                <AllBooks/>
            </section>
        </div>
    );
}