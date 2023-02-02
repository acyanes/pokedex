import useFetchPokemonStats from '@/hooks/useFetchPokemonStats';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BarGraph from '@/components/BarGraph';

const PokemonPage = () => {
  const { query } = useRouter();
  const { data, loading, error } = useFetchPokemonStats(
    query.pokemon as string
  );

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <div className='flex justify-center'>
      {data && (
        <div>
          <Image
            src={data.sprites.other.dream_world.front_default}
            alt='pokemon-image'
            width={500}
            height={250}
            className='bg-gray-100 mb-8 w-auto h-auto'
          />
          <span className='font-bold text-2xl font-mono mb-4'>Stats</span>
          <BarGraph stats={data.stats} />
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
