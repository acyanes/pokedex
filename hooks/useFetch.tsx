import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient({
  cacheOptions: { maxAge: 15 * 60 * 1000, exclude: { query: true } },
});

const useFetchPokemon = () => {
  const [urls, setUrls] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>();

  useEffect(() => {
    api
      .listPokemons(0, 151)
      .then((pokemon) => pokemon.results)
      .then((res) => {
        setUrls(res);
      });
  }, []);

  useEffect(() => {
    const responseData: any = [];
    if (urls) {
      urls.map((d: any) => {
        fetch(d.url)
          .then((res) => res.json())
          .then((json) => {
            responseData.push(json);
            if (responseData.length === Object.keys(urls).length) {
              setData(responseData);
            }
          })
          .catch((err) => setError(err));
      });

      setLoading(false);
    }
  }, [urls]);

  return { data, loading, error };
};

export default useFetchPokemon;
