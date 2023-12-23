import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

  getPokemonByNameOrId(value: string){
    return this.http.get(this.apiUrl + value)
  }

  getPokemonList(amount: string, origin: string){
    return this.http.get(this.apiUrl + `?limit=${amount}&offset=${origin}`)
  }


}
