import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  allPokemon: Array<any> = new Array();
  selectedPokemon?: Pokemon;

  constructor(private service: PokemonService) {
    this.init();
  }

  ngOnInit(): void {}

  async init() {
    let listOfPokemonNames: any;
    await this.service
      .getAllPokemon()
      .then((data) => (listOfPokemonNames = data.results))
      .catch((err) => console.log(err));

    for (let obj of listOfPokemonNames) {
      const name = obj.name;
      await this.service
        .getPokemonInfo(name)
        .then((data) => this.allPokemon.push(data))
        .catch((err) => console.log(err));
    }

    console.log(this.allPokemon[0]);
  }
}
