import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/types/pokemon';
import { User } from 'src/app/types/user';
import { account } from '../../../../lib/appwrite'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[] = []
  p = 1
  constructor(private pokeapi: PokeApiService) { }
  user: User | null = null

  async ngOnInit() {

    account.get().then((data: any) => {
      console.log(data)
      this.user = {
        id: data.$id,
        email: data.email,
        name: data.name
      }
      console.log(this.user)
    })
      .catch(() => {
        this.user = null
      })


    this.pokeapi.getPokemonList(`1017`, '0').subscribe(
      {
        next: (data: any) => {
          data.results.forEach((e: any) => {
            this.pokeapi.getPokemonByNameOrId(e.name).subscribe((data: any) => {
              this.pokemonList.push(
                {
                  id: data.id,
                  name: data.name,
                  url: data.sprites.other['official-artwork'].front_default,
                  types: data.types
                }
              )
            })
          });
        },
        error: (error: any)=>{
          console.log(error)
        },
        complete: ()=>{
          this.pokemonList = this.pokemonList.sort((a: any, b:any)=>{
            return a.id - b.id
          })
        }
      }
    )
  }
}
