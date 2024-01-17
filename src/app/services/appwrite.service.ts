import { Injectable } from '@angular/core';
import { account } from '../../lib/appwrite'

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  constructor() { }

  update(){

  }

  emailUpdate(email: string, password: string){
    account.updateEmail(email, password)
  }

  nameUpdate(){

  }

  passwordUpdate(){

  }

}
