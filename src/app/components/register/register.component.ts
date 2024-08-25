import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service : UserService, private router : Router){}

  formRegister !: FormGroup;

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      'name': new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')],
        updateOn: 'blur'
      }),
      'lastName': new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')],
        updateOn: 'blur'
      }),
      'email': new FormControl('', {
        validators: [Validators.required, Validators.email, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
        updateOn: 'blur'
      }),
      'password': new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        updateOn: 'blur'
      }),
      'passwordRepeat': new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      })

    }, {
      validators: CustomValidator.matchPasswords('password', 'passwordRepeat')
  })
  }

  register(){
    console.log(this.formRegister);
    
    if(!this.formRegister.invalid){
      let user : User = new User();
      user.name = this.formRegister.controls['name'].value;
      user.lastName = this.formRegister.controls['lastName'].value;
      user.email = this.formRegister.controls['email'].value;
      user.password = this.formRegister.controls['password'].value;
      console.log(user);
      
      this.service.posRegister(user).subscribe((response)=>{
        console.log(response);
        window.location.reload();
      },     
      (error)=>{
        //alert("Error en el servidor");
        this.router.navigate(['/login']);
        console.log(error);
      })
    }
  }

}
