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
          console.log(d);
          const stats = {
            stats: d.stats,
            sprite: d.sprites.other.dream_world.front_default,
            weight: d.weight,
            height: d.height,
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
        <div className="flex m-4">
          <div>
            <div className="relative w-[400px] h-[400px] mb-2">
              <Image
                src={results.sprite}
                alt="pokemon-image"
                className="bg-gray-100 mb-8"
                fill
              />
            </div>
            <div className="bg-cyan-500 rounded">
              <ul className="list-none pl-2 font-semibold">
                <li>
                  <span className="text-white font-light">Height</span>
                  <span className="block">{results.height}</span>
                </li>
                <li>
                  <span className="text-white font-light">Weight</span>
                  <span className="block">{results.weight} lbs</span>
                </li>
                <li>
                  <span className="text-white font-light">Type</span>
                  <span className="block">{}</span>
                </li>
                <li>
                  <span className="text-white font-light">Weakness</span>
                  <span className="block">{} </span>
                </li>
              </ul>
            </div>
          </div>
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
