import { useEffect, useState } from "react";
import { Type } from "@/utils/Types";
import Card from "./Card";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  sprite: string;
  id: string;
  type?: Type[];
}

const CardList = ({ name, url }: Pokemon) => {
  const [data, setData] = useState<any>();
  const [details, setDetails] = useState<PokemonDetails>();

  useEffect(() => {
    if (data) {
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);

  useEffect(() => {
    if (data) {
      const types: Type[] = [];
      data.types.map((t: any) => types.push(t.type.name));
      const pokemon: PokemonDetails = {
        name: name,
        sprite: data.sprites.other.dream_world.front_default,
        id: data.id,
        type: [...types],
      };
      setDetails(pokemon);
    }
  }, [data]);

  return (
    <div className="flex hover:animate-wiggle">
      {details ? <Card details={details} /> : <div>Loading</div>}
    </div>
  );
};

export default CardList;
