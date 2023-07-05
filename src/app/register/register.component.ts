import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup
  private id:number =1;
  constructor(private fb:FormBuilder,private rt:Router){
    this.registerForm=this.fb.group({
        userid:this.id,
        firstname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
        middlename:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
        lastname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        gender:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
        contact:[,[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
        password:['',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]]
    });
  }

  get firstName(){
    return this.registerForm.get('firstname');
  }

  get middleName(){
    return this.registerForm.get('middlename');
  }

  get lastName(){
    return this.registerForm.get('lastname');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get contact(){
    return this.registerForm.get('contact');
  }

  get password(){
    return this.registerForm.get('password');
  }

  registerUser(){
    this.rt.navigate(['/posts']);
  }
}

