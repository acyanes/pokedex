import useFetchPokemon from "@/hooks/useFetch";
import CardList from "./Card/CardList";

interface IPokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const { data, loading, error } = useFetchPokemon();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center m-4">
      {data &&
        data.map((pokemon: IPokemon) => {
          return (
            <CardList
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
    </div>
  );
};

export default Pokemon;
