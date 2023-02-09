import { createContext } from "react";
import useFetchPokemon from "@/hooks/useFetch";

export const PokemonContext = createContext<any>(null);
interface Props {
  children: React.ReactNode;
}

const Context = ({ children }: Props) => {
  const { data, loading, error } = useFetchPokemon();

  return (
    <PokemonContext.Provider value={{ data, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default Context;
