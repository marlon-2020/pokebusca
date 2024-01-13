import { Component, Input, OnInit } from '@angular/core';
import { account } from '../../../lib/appwrite'
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.sass']
})
export class UserContainerComponent {

  constructor(private router: Router){}

  @Input() userInput: User|null = null
  

  desconectar(){
    account.deleteSessions()
    .then(()=>{
      this.userInput = null
      localStorage.removeItem('cookieFallback')
      localStorage.removeItem('userId')
    })
  }

  goToProfile(){
    account.get()
    .then((details: any)=>{
      localStorage.setItem('userId', details.$id)
      this.router.navigate(['/profile', details.$id]);
    })
  }

}
