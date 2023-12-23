import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/types/pokemon';

@Component({
  selector: 'app-poke-busca',
  templateUrl: './poke-busca.component.html',
  styleUrls: ['./poke-busca.component.sass']
})
export class PokeBuscaComponent {
  constructor(private pokeapi: PokeApiService){}

  pokemon!: Pokemon

  find(value: string){
    this.pokeapi.getPokemonByNameOrId(value.toLowerCase()).subscribe({
      next: (info: any)=>{
        this.pokemon = {
          id: info.id, 
          name: info.name,
          url: info.sprites.other['official-artwork'].front_default,
          types: info.types
        }
        console.log(this.pokemon)
      },
      error: (error: any)=>{
        if(error.status === 404){
          alert("pokemon não existe!")
        }
      }
    })
  }


}
