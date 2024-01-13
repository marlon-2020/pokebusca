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
    if(localStorage.getItem('cookieFallback')){
      alert('Já há alguém em sessão, desconecte antes de logar!')
    }else{
      await account.createEmailSession(email, senha)
      this.logado = await account.get()
      .then((data: any)=>{
        this.user = {
          id: data.$id, 
          email: data.email, 
          name: data.name
        }
        this.console(this.user)
      })
      .then(()=>{
        this.router.navigate(['/poke-busca'])
      }).catch((e=>{
        this.console(e)
      }))
    }
  }

  async cadastrar(email: string, nome: string, senha: string){
      account.create(ID.unique(), email, senha, nome)
      .then(()=>{
        alert('cadastro feito com sucesso!')
      })
      .then(()=>{
        this.logar(email, senha)
      })
      .catch(error=>{
        this.console(error)
      })
  }
  
  console(value: any){
    console.log(value)
  }

  btn(value: string){
    this.choice = value
  } 

  goToHome(){
    this.router.navigate(['/poke-busca'])
  }
}
