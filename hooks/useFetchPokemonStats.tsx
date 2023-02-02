import { useEffect, useState } from 'react';
import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient({
  cacheOptions: { maxAge: 15 * 60 * 1000, exclude: { query: false } },
});

const useFetchPokemonStats = (name: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .getPokemonByName(name)
      .then((pokemon) => pokemon)
      .then((res) => setData(res))
      .catch((err) => setError(err));

    setLoading(false);
  }, []);

  return { data, loading, error };
};

export default useFetchPokemonStats;
