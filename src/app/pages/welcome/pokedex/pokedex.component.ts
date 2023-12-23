import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/types/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[] = []
  p = 1
  constructor(private pokeapi: PokeApiService) { }

  ngOnInit() {
    let i = 0
    this.pokeapi.getPokemonList(`1017`, '0').subscribe((data: any) => {
      data.results.forEach((e: any) => {
        let i = 0
        this.pokeapi.getPokemonByNameOrId(e.name).subscribe((data: any) => {
          this.pokemonList.push(
            {
              id: data.id,
              name: data.name,
              url: data.sprites.other['official-artwork'].front_default,
              types: data.types
            }
          )
          this.pokemonList = this.pokemonList.sort((a: any, b: any) => {
            return a.id - b.id
          })
        })
      });
    })
  }



}
