import { Component, OnInit } from '@angular/core';
import { account } from '../../../../lib/appwrite'
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit{
  user: User|null = null
  disableName: boolean = true
  disableEmail: boolean = true
  disablePhone: boolean = true

  ngOnInit() {
    account.get()
      .then((data: any) => {
        this.user = {
          id: data.$id,
          email: data.email,
          name: data.name
        }
      })
      .catch(() => {
        this.user = null
      })
  } 
  edit(value: number){
    switch(value){
      case 1:
        this.disableName = !this.disableName
      break
      case 2:
        this.disableEmail = !this.disableEmail
      break
    }
  }
}
