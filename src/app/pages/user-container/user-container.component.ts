import { Component, Input } from '@angular/core';
import { account } from '../../../lib/appwrite'
import { User } from 'src/app/types/user';

@Component({
  selector: 'user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.sass']
})
export class UserContainerComponent {

  @Input() userInput: User|null = null

  desconectar(){
    account.deleteSessions()
    .then(()=>{
      console.log('oi')
      this.userInput = null
    })
  }
}
