
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
  // console.log(process.env.API_TMDB);
  const genreType = searchParams.genre ?? "fetchTrending";
  const data = await fetchTrending(genreType);
  
  return (
    <div className="text-red-600">Home</div>
  )
}
