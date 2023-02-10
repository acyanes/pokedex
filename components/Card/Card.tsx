import Image from "next/image";
import TypesCard from "./TypesCard";
import Link from "next/link";

export interface CardDetails {
  details: any;
}

const Card = ({ details }: CardDetails) => {
  const types: any = [];
  for (const [, value] of Object.entries(details.types)) {
    //@ts-ignore
    types.push(value.type.name);
  }

  return (
    <div className="hover:cursor-pointer m-8 ">
      <Link href={`/${details.name}`}>
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={details.sprite}
            alt="pokemon-image"
            className="m-auto bg-gray-100"
            fill
          />
        </div>

        <div className="text-xs mb-2">#{details.id}</div>
        <div className="font-serif font-medium tracking-wide">
          {details.name.toUpperCase()}
        </div>
        <TypesCard types={types} />
      </Link>
    </div>
  );
};

export default Card;
