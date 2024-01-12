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
  console(){
    console.log(account.get())
  }
}
