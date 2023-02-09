import { PokemonContext } from "@/context/context";
import { useContext } from "react";

const useData = () => {
  const { data, loading, error } = useContext(PokemonContext);
  return { data, loading, error };
};

export default useData;
