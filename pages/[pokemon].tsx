import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import BarGraph from "@/components/BarGraph";
import Loading from "@/components/Loading";
import useFetchPokemon from "@/hooks/useFetch";

const PokemonPage = () => {
  const { query } = useRouter();
  const { data, loading, error } = useFetchPokemon();
  const [results, setResults] = useState<any>();
  const pokemon = query.pokemon as string;

  useEffect(() => {
    if (data) {
      data.map((d: any) => {
        if (d.name === pokemon) {
          const stats = {
            stats: d.stats,
            sprite: d.sprites.other.dream_world.front_default,
          };
          setResults(stats);
        }
      });
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <div className="flex justify-center">
      {results && (
        <div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={results.sprite}
              alt="pokemon-image"
              className="bg-gray-100 mb-8"
              fill
            />
          </div>
          <div>about</div>
          <div className="flex-col">
            <span className="font-bold text-2xl font-mono ml-8">Stats</span>
            <BarGraph stats={results.stats} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
