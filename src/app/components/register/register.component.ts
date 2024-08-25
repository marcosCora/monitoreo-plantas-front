import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service : UserService){}

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
        validators: [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>?]).*$/)],
        updateOn: 'blur'
      }),
      'repeatPassword': new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      })

    }, {
      validators: CustomValidator.matchPasswords('password', 'repeatPassword')
  })
  }

  register(){
    if(!this.formRegister.invalid){
      console.log(this.formRegister);
      


    }


  }

}
