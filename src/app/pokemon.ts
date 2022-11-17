import { Type } from './types';
export interface Pokemon {
  name: string;
  url: string;
}

// map types to the enum
export interface PokemonTypes {
  types: Type[];
}
