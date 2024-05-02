import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  signUpUsers: any[] = []

  signUpObj:any = {
    userName: '',
    email:'',
    password: ''
  } 
  
  loginObj:any = {
    email: '',
    password: ''
  } 

  ngOnInit(): void{
    const localData = localStorage.getItem('users')
    if(localData != null){
      this.signUpUsers = JSON.parse(localData);
    }
  }
        
  onSignUp(){
    this.signUpUsers.push(this.signUpObj)
    localStorage.setItem('users',JSON.stringify(this.signUpUsers))

    this.signUpObj = {
      userName: '', 
      email: '',
      password: ''
    }
  }


  onLogin(){
    const isUserExists = this.signUpUsers.find(m=> m.email == this.loginObj.email && m.password == this.loginObj.password)

    if(isUserExists != undefined){
      alert('login successfull')
      let content = document.getElementById('content')
      let nme = document.createElement('h1')
      nme.innerText = isUserExists.userName 
      console.log(isUserExists)
      let eml = document.createElement('h1')
      eml.innerText = isUserExists.email
      
      let pwd = document.createElement('h1')
      pwd.innerText = isUserExists.password 

      content?.appendChild(nme)
      content?.appendChild(eml)
      content?.appendChild(pwd)

    }
    else{
      alert('invalid credentials')
    }
  }

}
