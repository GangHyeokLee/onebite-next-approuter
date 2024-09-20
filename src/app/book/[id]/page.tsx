export default function Page({params}: {params: {id: string}}) {
    return(
        <div>
            book/[id]페이지
            {params.id}
        </div>
    )
}