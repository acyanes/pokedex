import useFetchPokemonStats from "@/hooks/useFetchPokemonStats";
import { useRouter } from "next/router";
import Image from "next/image";

const PokemonPage = () => {
  const { query } = useRouter();
  const { data, loading, error } = useFetchPokemonStats(
    query.pokemon as string
  );

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  console.log(data);

  return (
    <div>
      {data && (
        <div>
          <Image
            src={data.sprites.other.dream_world.front_default}
            alt="pokemon-image"
            width={250}
            height={250}
            className="m-auto bg-gray-100"
          />
          <div>height: {data.height}</div>
          <div>weight: {data.weight}</div>
          <div>stats</div>
          {data.stats.map((stat: any) => (
            <li>{stat.base_stat}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
