"use client"

import React, {useState, KeyboardEvent} from 'react';
import {useRouter} from "next/navigation";

function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        router.push(`/search?q=${search}`);
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="d-flex flex-row mb-5" style={{gap: '10px'}}>
            <input
                className="form-control flex-grow-1"
                placeholder="검색어를 입력하세요."
                type={"text"}
                value={search} onChange={onChangeSearch}
                onKeyDown={onKeyDown}
            />
            <button className={"btn btn-primary text-nowrap"} onClick={onSubmit}>검색</button>
        </div>
    );
}

export default Searchbar;