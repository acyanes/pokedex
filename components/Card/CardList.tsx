import { Type } from "@/utils/Types";
import Card from "./Card";

export interface Pokemon {
  details: any;
}

export interface PokemonDetails {
  name: string;
  sprite: string;
  id: string;
  type?: Type[];
}

const CardList = ({ details }: Pokemon) => {
  return (
    <div>
      {details.map((detail: any) => {
        const detailsObj = {
          name: detail.name,
          sprite: detail.sprites.other.dream_world.front_default,
          id: detail.id,
          types: detail.types,
        };
        return (
          <div className="flex hover:animate-wiggle m-8">
            <Card details={detailsObj} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
