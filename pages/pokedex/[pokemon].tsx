import useFetchPokemonStats from "@/hooks/useFetchPokemonStats";
import { useRouter } from "next/router";
import Image from "next/image";
import BarGraph from "@/components/BarGraph";
import Loading from "@/components/Loading";
import useData from "@/hooks/useData";

const PokemonPage = () => {
  const { query } = useRouter();
  // const { data, loading, error } = useFetchPokemonStats(
  //   query.pokemon as string
  // );

  const { data, loading, error } = useData();
  console.log(data);
  // so have to filter each and look for the query.pokemon name
  const details = data.filter(
    (pokemon) => pokemon.name === (query.pokemon as string)
  );
  console.log(details);

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <div className="flex justify-center">
      {data && (
        <div className="relative w-[400px] h-[400px]">
          <Image
            src={data.sprites.other.dream_world.front_default}
            alt="pokemon-image"
            className="bg-gray-100 mb-8"
            fill
          />
        </div>
      )}
      <div>about</div>
      <div className="flex-col">
        <span className="font-bold text-2xl font-mono ml-8">Stats</span>
        <BarGraph stats={data.stats} />
      </div>
    </div>
  );
};

export default PokemonPage;
