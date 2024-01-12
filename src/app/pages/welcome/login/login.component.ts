import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account, ID } from '../../../../lib/appwrite'
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router){}
  
  ngOnInit(){
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

  email: string = ''
  senha: string = ''
  nome: string = ''
  logado: any = null
  choice = ''
  user: User|null = null
  width = '0'

  async logar(email: string, senha: string){
    await account.createEmailSession(email, senha)
    this.logado = await account.get()
    .then((data: any)=>{
      this.user = {
        id: data.$id, 
        email: data.email, 
        name: data.name
      }
    })
    .then(()=>{
      this.router.navigate(['/poke-busca'])
    }).catch((e=>{
      this.console(e)
    }))
  }

  async cadastrar(email: string, nome: string, senha: string){
      account.create(ID.unique(), email, senha, nome)
      .then((data: any)=>{
        this.logar(email, senha)
      })
      .then(()=>[
        this.router.navigate(['/poke-busca'])
      ])
      .catch(error=>{
        this.console(error)
      })
  }
  
  console(value: any){
    console.log(value)
  }

  async deslogar(){

  }

  btn(value: string){
    this.choice = value
  } 

  goToHome(){
    this.router.navigate(['/poke-busca'])
  }
}
