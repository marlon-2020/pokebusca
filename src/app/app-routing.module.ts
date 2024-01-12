import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PokeBuscaComponent } from './pages/welcome/poke-busca/poke-busca.component';
import { PokedexComponent } from './pages/welcome/pokedex/pokedex.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { ProfileComponent } from './pages/welcome/profile/profile.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: 'home', component: WelcomeComponent
  },
  {
    path: 'poke-busca', component: PokeBuscaComponent
  },
  {
    path: 'pokedex', component: PokedexComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile/:id', component: ProfileComponent, canMatch: [authGuard]
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
