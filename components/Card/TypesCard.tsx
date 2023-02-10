import { Type } from "@/utils/Types";

interface Props {
  types: Type[] | undefined;
}

interface HashMap<T> {
  [key: string]: T;
}

const color: HashMap<string> = {
  [Type.BUG]: "bg-lime-400",
  [Type.ICE]: "bg-blue-300",
  [Type.FIRE]: "bg-red-500",
  [Type.ROCK]: "bg-yellow-600",
  [Type.GHOST]: "bg-purple-900",
  [Type.FLYING]: "",
  [Type.GRASS]: "bg-lime-600",
  [Type.GROUND]: "bg-amber-600",
  [Type.NORMAL]: "bg-gray-300",
  [Type.POISON]: "bg-purple-500",
  [Type.PSYCHIC]: "bg-pink-400",
  [Type.WATER]: "bg-blue-500",
  [Type.DRAGON]: "",
  [Type.ELECTRIC]: "bg-yellow-300",
  [Type.FIGHTING]: "bg-yellow-800",
};

const TypesCard = ({ types }: Props) => {
  return (
    <div className="flex">
      {types &&
        types.map((type, index) => (
          <li
            key={index}
            className={`${
              color[types[index].toUpperCase()]
            } list-none border-2 border-transparent rounded-md mr-1 w-[75px] text-center text-white font-extralight`}
          >
            {type}
          </li>
        ))}
    </div>
  );
};

export default TypesCard;
