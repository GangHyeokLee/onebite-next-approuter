import {ReactNode} from "react";
import Searchbar from "@/app/components/searchbar";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <div className={"container "}>
            <Searchbar/>
            {children}
        </div>
    )
}

