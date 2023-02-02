import Image from 'next/image';
import TypesCard from './TypesCard';
import Link from 'next/link';

export interface CardDetails {
  details?: any;
}

const Card = ({ details }: CardDetails) => {
  return (
    <div className='m-4 hover:cursor-pointer'>
      <Link href={`/pokedex/${details.name}`}>
        <Image
          src={details.sprite}
          alt='pokemon-image'
          width={300}
          height={300}
          className='m-auto bg-gray-100 w-auto h-auto'
        />
        <div className='text-xs mb-2'>#{details.id}</div>
        <div className='font-serif font-medium tracking-wide'>
          {details.name.toUpperCase()}
        </div>
        <TypesCard types={details?.type} />
      </Link>
    </div>
  );
};

export default Card;
