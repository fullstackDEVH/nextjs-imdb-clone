import Card from "@/components/Card";
const fetchListSearch = async (search: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_TMDB_KEY}&query=${search}&language=en-US&include_adult=false`
  );

  return await res.json();
};

export default async function SearchPage({ params }: any) {
  let { results } = await fetchListSearch(params.keyword);
    
  if (!results) {
    throw new Error("Error fetching data");
  };

  return (
    <div className="mt-6">
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto gap-4">
        {results.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
