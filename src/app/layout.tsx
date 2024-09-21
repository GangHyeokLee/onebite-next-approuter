import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import {BookData} from "@/type";

async function Footer(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
    if(!response.ok){
        return <div>제작 @이강혁</div>
    }

    const books: BookData[] = await response.json();
    const bookCount = books.length;
    return <footer>
        <div>제작 @이강혁</div>
        <div>{bookCount} 권의 도서가 등록되어 있습니다.</div>

    </footer>
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <div className="container bg-white min-vh-100 mx-auto my-0 shadow-lg">
            <header className="h-25 fw-bold fs-5 lh-lg">
                <Link href={'/'} className="text-black text-decoration-none">📚 ONEBITE BOOKS</Link>
            </header>
            <main className="pt-3">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
