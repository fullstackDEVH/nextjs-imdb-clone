import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import {BiSearchAlt2} from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { BsFillSunFill } from "react-icons/bs";

import Link from "next/link";

const menu = [
    {
        title: "Home",
        path: "/",
        icon: AiFillHome
    },
    {
        title: "Search",
        path: "/search",
        icon: BiSearchAlt2
    },
    {
        title: "About",
        path: "/about",
        icon: HiInformationCircle
    }
]

const Header = () => {
    return (
        <div className="header flex justify-between items-center mx-2 py-6 sm:mx-auto sm:max-w-6xl">
            <div className="flex">
                {
                    menu.map((item, index) => (
                        <MenuItem title={item.title} path={item.path} Icon={item.icon} key={index} />
                    ))
                }
            </div>
            <div className="flex items-center gap-4">
                <BsFillSunFill className="text-xl hover:text-amber-500 cursor-pointer" />
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 text-white">IMDB</span>
                        <span className="text-xl hidden sm:inline-block font-medium">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default Header;