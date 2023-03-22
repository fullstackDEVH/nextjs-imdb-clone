import Card from "@/components/Card";
import Test from "./Test";

const fetchTrending = async (genre : string) => {
  const key = process.env.API_TMDB_KEY;

  const res= await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${key}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  return await res.json();
}

export default async function Home( { searchParams } : any ) {
  const genreType = searchParams.genre ?? "fetchTrending";
  const data = await fetchTrending(genreType);
  if (!data.results) {
    throw new Error("Error fetching data");
  }
  return (
    <div className="mt-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto gap-4">
            {
                data?.results.map((item : any) => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>

        <Test />
    </div>
  )
};
