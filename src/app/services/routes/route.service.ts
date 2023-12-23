import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  goToPokeBusca(){
    this.router.navigateByUrl('poke-busca')
  }

  goToPokedex(){
    this.router.navigateByUrl('pokedex')
  }

  goToHome(){
    this.router.navigateByUrl('/home')
  }

}
