"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface IProps {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: IProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div
      className={`hover:text-amber-600 font-semibold p-2 ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500"
          : "dark:text-gray-200"
      }`}
    >
      <Link href={`/?genre=${param}`} className="">
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
