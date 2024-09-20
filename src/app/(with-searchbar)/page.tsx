import 'bootstrap/dist/css/bootstrap.min.css';
import recoBooks from '../../mock/books.json';
import allBooks from '../../mock/books.json';
import BookItem from "@/components/book-item";

export default function Home() {

    return (
        <div className="d-flex flex-column" style={{gap: "20px"}}>
            <section>
                <h3 className="fw-bold mb-5">지금 추천하는 도서</h3>
                {recoBooks.map((book) => <BookItem key={book.id} {...book} />)}
            </section>
            <section>
                <h3 className="fw-bold mb-5">등록된 모든 도서</h3>
                {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
            </section>
        </div>
    );
}