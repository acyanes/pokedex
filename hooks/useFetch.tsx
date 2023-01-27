import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

const useFetchPokemon = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .listPokemons(0, 151)
      .then((pokemon) => pokemon.results)
      .then((res) => setData(res))
      .catch((err) => setError(err));

    setLoading(false);
  }, []);

  return { data, loading, error };
};

export default useFetchPokemon;
