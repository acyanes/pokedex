import CardList from "./Card/CardList";
import Loading from "./Loading";
import { useContext } from "react";
import { PokemonContext } from "@/context/context";
import useData from "@/hooks/useData";

interface IPokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return <Loading />;
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
