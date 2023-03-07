

import Link from "next/link";
import { IconType } from "react-icons/lib/esm/iconBase";

interface IProps{
    title : string;
    path : string;
    Icon : IconType;
}

const MenuItem = ( { title, path, Icon } : IProps) => {
    return (
        <div className="mx-2 lg:mx-6 hover:text-amber-600" >
            <Link href={`${path}`} className="" >
                <Icon className="sm:hidden text-2xl" />
                <p className="hidden sm:block text-xl font-medium"> {title}</p>
            </Link>
        </div>
    )
}

export default MenuItem;