"use client";
import Image from "next/image";
import Link from "next/link";
import { BiLike } from "react-icons/bi";

const Card = ({ item }: any) => {
  return (
    <div className="p-2 rounded-lg border-gray-200 border-2 border-solid group cursor-pointer sm:shadow-md sm:hover:shadow-slate-400 sm:shadow-md">
      <Link href={`movies/${item.id}`}>
        <div className="img">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path
            }`}
            width={500}
            height={300}
            alt="poster"
            placeholder="blur"
            blurDataURL="https://raw.githubusercontent.com/sahandghavidel/imdb/33eceff249090c119366047423cb81fa2f1c5d76/public/spinner.svg"
          />
        </div>

        <h3 className="font-medium text-xl mb-2 ">{item.name ?? item.title}</h3>

        <p className="line-clamp-2">{item.overview}</p>

        <div className="mt-1 flex justify-between items-center">
          <div className="date">{item.first_air_date ?? item.release}</div>
          <div className="flex items-center gap-1">
            <BiLike />
            <p className="rate">{item.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
