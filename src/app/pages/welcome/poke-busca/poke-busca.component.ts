import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/types/pokemon';
import { account } from '../../../../lib/appwrite'
import { User } from 'src/app/types/user';


@Component({
  selector: 'app-poke-busca',
  templateUrl: './poke-busca.component.html',
  styleUrls: ['./poke-busca.component.sass']
})
export class PokeBuscaComponent implements OnInit {

  constructor(
      private pokeapi: PokeApiService,
    ){}

  user: User|null = null

  ngOnInit(){
    account.get().then((data: any)=>{
        this.user = {
        id: data.$id,
        email: data.email,
        name: data.name
      }
    })
    .catch(()=>{
      this.user = null
    })
  }

  pokemon!: Pokemon
  width: string = '0'

  find(value: string){
    this.pokeapi.getPokemonByNameOrId(value.toLowerCase()).subscribe({
      next: (info: any)=>{
        this.pokemon = {
          id: info.id, 
          name: info.name,
          url: info.sprites.other['official-artwork'].front_default,
          types: info.types
        }
      },
      error: (error: any)=>{
        if(error.status === 404){
          this.width = '300px'
          setTimeout(()=>{
            this.width = '0px'
          }, 1500)
        }
      }
    })
  }

  desconectar(){
    account.deleteSessions()
    .then(()=>{
      this.user = null
    })
  }
}
