import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookItemSkeleton() {
    return (
        <div className="d-flex py-5 px-2 placeholder-wave" aria-hidden="true"
             style={{gap: "15px", borderBottom: "solid 1px rgb(220, 220, 220)"}}>
            <div className="placeholder bg-secondary" style={{width: 80, height: 105}}></div>
            <div className="placeholder-wave d-flex flex-column flex-grow-1" style={{gap:3}}>
                <span className="placeholder bg-secondary col-10"></span>
                <span className="placeholder bg-secondary col-10"></span>
                <br/>
                <span className="placeholder bg-secondary col-6"></span>
            </div>
        </div>
    );
}