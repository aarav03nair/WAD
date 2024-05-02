import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users:any =[]

  signUpObj: any = {
    name: '',
    email: '',
    password: ''
  }

  loginiObj: any = {
    name: '',
    password: ''
  }

  ngOnInit(){
    const localData = localStorage.getItem('users')
    if(localData != null){
      this.users = JSON.stringify(localData)
    }
  }

  onSignUp(){
    this.users.push(this.signUpObj)
    localStorage.setItem('users',JSON.stringify(this.users))
    alert('data added successfully')
  }

  onLogin(){
    const isUser = this.users.find((m: { name: any; password: any; })=> m.name==this.loginiObj.name && m.password == this.loginiObj.passwrod)
    if(isUser != null){

    }
  }
}
