import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './pages/welcome/header/header.component';
import { FooterComponent } from './pages/welcome/footer/footer.component';
import { PokeBuscaComponent } from './pages/welcome/poke-busca/poke-busca.component';
import { PokedexComponent } from './pages/welcome/pokedex/pokedex.component';
import { ChangePagesDirective } from './directives/change-pages.directive';
import { TransitionComponent } from './pages/transition/transition.component';
import { MenuMobileComponent } from './pages/menu-mobile/menu-mobile.component';
import { MenuComputerComponent } from './pages/menu-computer/menu-computer.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { PokemonDetailsComponent } from './pages/welcome/pokemon-details/pokemon-details.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { SlideFormsDirective } from './directives/slide-forms.directive';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/welcome/profile/profile.component';
import { SuccessComponent } from './pages/success/success.component';

export function tokenGetter() {
  console.log('oi')
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    PokeBuscaComponent,
    PokedexComponent,
    ChangePagesDirective,
    TransitionComponent,
    MenuMobileComponent,
    MenuComputerComponent,
    ArrayToStringPipe,
    PokemonDetailsComponent,
    LoginComponent,
    SlideFormsDirective,
    UserContainerComponent,
    NotFoundComponent,
    ProfileComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200/"],
        disallowedRoutes: ["localhost:4200/login"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
