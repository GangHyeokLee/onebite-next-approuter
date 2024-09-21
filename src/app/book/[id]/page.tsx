import styles from "./[id].module.css";
import {BookData} from "@/type";
import {notFound} from "next/navigation";

// export const dynamicParams = false;

export function generateStaticParams() {
    return [{id: "1"}, {id: "2"}, {id: "3"},]
}

export default async function Page({params}: { params: { id: string | string[] } }) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`);

    if (!response.ok) {
        if(response.status === 404){
            notFound();
        }
        return <div>오류가 발생했습니다.</div>
    }

    const book: BookData = await response.json();

    const {
        title, subTitle, author, coverImgUrl, description, publisher
    } = book;
    return (

        <div className="d-flex flex-column" style={{gap: 10}}>
            <div style={{
                backgroundImage: `url('${coverImgUrl}')`,
            }} className={styles.cover_img_container}>
                <img src={coverImgUrl} alt={title}/>
            </div>
            <div className="fw-bold text-lg-start"> {title}</div>
            <div className="text-secondary">{subTitle}</div>
            <div className="text-secondary">{author} | {publisher}</div>
            <div className="bg-body-tertiary p-3 lh-base" style={{whiteSpace: "pre-line"}}>{description}</div>
        </div>
    )
}