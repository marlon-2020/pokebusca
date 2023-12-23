import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

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
    ArrayToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
