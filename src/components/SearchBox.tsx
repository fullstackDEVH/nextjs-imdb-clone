'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");

    const handleSubmit = (e :  FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!search) return;

        router.push(`/search/${search}`)
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto flex mt-4">
            <input type="text" name="text" placeholder="searching keywords ...."
                className="h-14 w-full rounded-lg placeholder-gray-500 pl-4 text-xl outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" disabled={!search} className="bg-amber-600 font-medium cursor-pointer text-gray-100 py-1 px-4 ml-4 rounded hover:opacity-80 transition-opacity">Search</button>
        </form>
    )
}

export default SearchBox;