import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private serviceUser : UserService){}

  nameUser : string = '';

  ngOnInit(): void {
    let email = localStorage.getItem("emailUser") as string;
    let user : UserLogin = {
      email : email,
      password : ''
    }
    this.serviceUser.getName(user).subscribe((response)=>{
      this.nameUser = response.message;
    }, (error)=>{
      console.log(error);
    })
  }
}
