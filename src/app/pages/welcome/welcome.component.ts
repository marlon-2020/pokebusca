import { Component } from '@angular/core';
import { RouteService } from 'src/app/services/routes/route.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent {
  constructor(private routes: RouteService){}

  goTo(){
    this.routes.goToPokeBusca()
  }
}
