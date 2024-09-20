import styles from "./[id].module.css";
import allBooks from "@/mock/books.json";

export default function Page({params}: { params: { id: string } }) {
    const {
        title, subTitle, author, coverImgUrl, description, publisher
    } = allBooks[params.id];
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