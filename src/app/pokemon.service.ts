import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';

@Injectable()
export class PokemonService {
  private pokedex;
  constructor() {
    this.pokedex = new PokemonClient();
  }

  getAllPokemon(): Promise<any> {
    return this.pokedex.listPokemons(0, 151);
  }

  getPokemonInfo(name: string): Promise<any> {
    return this.pokedex.getPokemonByName(name);
  }
}
