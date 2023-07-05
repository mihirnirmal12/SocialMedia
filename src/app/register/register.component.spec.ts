import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports:[ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('firstname is not empty - required',()=>{
    var firstnamecontrol = component.registerForm.controls['firstname']
    firstnamecontrol.setValue('')
    expect(firstnamecontrol.valid).toBeFalsy();
  })

  it('firstname is not contain number',()=>{
    var firstnamecontrol = component.registerForm.controls['firstname']
    firstnamecontrol.setValue('mihir32434')
    expect(firstnamecontrol.valid).toBeFalsy();
  })
  
  it('firstname is not contain special characters',()=>{
    var firstnamecontrol = component.registerForm.controls['firstname']
    firstnamecontrol.setValue('mihr@')
    expect(firstnamecontrol.valid).toBeFalsy();
  })

  it('firstname is not contain only whitespaces',()=>{
    var firstnamecontrol = component.registerForm.controls['firstname']
    firstnamecontrol.setValue('  ')
    expect(firstnamecontrol.valid).toBeFalsy();
  })

  it('firstname is accept only string',()=>{
    var firstnamecontrol = component.registerForm.controls['firstname']
    firstnamecontrol.setValue('mihir')
    expect(firstnamecontrol.valid).toBeTruthy();
  })

  //middlename
  it('middlename is not empty - required',()=>{
    var middlenamecontrol = component.registerForm.controls['middlename']
    middlenamecontrol.setValue('')
    expect(middlenamecontrol.valid).toBeFalsy();
  })

  it('middlename is not contain number',()=>{
    var middlenamecontrol = component.registerForm.controls['middlename']
    middlenamecontrol.setValue('mihir32434')
    expect(middlenamecontrol.valid).toBeFalsy();
  })
  
  it('middlename is not contain special characters',()=>{
    var middlenamecontrol = component.registerForm.controls['middlename']
    middlenamecontrol.setValue('mihr@')
    expect(middlenamecontrol.valid).toBeFalsy();
  })

  it('middlename is not contain only whitespaces',()=>{
    var middlenamecontrol = component.registerForm.controls['middlename']
    middlenamecontrol.setValue('  ')
    expect(middlenamecontrol.valid).toBeFalsy();
  })

   //lastname
   it('lastname is not empty - required',()=>{
    var lastnamecontrol = component.registerForm.controls['lastname']
    lastnamecontrol.setValue('')
    expect(lastnamecontrol.valid).toBeFalsy();
  })

  it('lastname is not contain number',()=>{
    var lastnamecontrol = component.registerForm.controls['lastname']
    lastnamecontrol.setValue('mihir32434')
    expect(lastnamecontrol.valid).toBeFalsy();
  })
  
  it('lastname is not contain special characters',()=>{
    var lastnamecontrol = component.registerForm.controls['lastname']
    lastnamecontrol.setValue('mihr@')
    expect(lastnamecontrol.valid).toBeFalsy();
  })

  it('lastname is not contain only whitespaces',()=>{
    var lastnamecontrol = component.registerForm.controls['lastname']
    lastnamecontrol.setValue('  ')
    expect(lastnamecontrol.valid).toBeFalsy();
  })


  //email
  it('email is not empty - required',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('')
    expect(emailcontrol.valid).toBeFalsy();
  })

  
  it('email is not contain only string',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('mihir nirmal')
    expect(emailcontrol.valid).toBeFalsy();
  })

  it('email is not contain only @',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('mihir@nirmal')
    expect(emailcontrol.valid).toBeFalsy();
  })

  it('email is not accept only .',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('mihir@nirmal.')
    expect(emailcontrol.valid).toBeFalsy();
  })

  it('email is not accept only number',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('46436654')
    expect(emailcontrol.valid).toBeFalsy();
  })

  it('email is accept valid email',()=>{
    var emailcontrol = component.registerForm.controls['email']
    emailcontrol.setValue('mihirnirmal@gmail.com')
    expect(emailcontrol.valid).toBeTruthy();
  })
 

  //gender
  it('gender is not empty - required',()=>{
    var gendercontrol = component.registerForm.controls['gender']
    gendercontrol.setValue('')
    expect(gendercontrol.valid).toBeFalsy();
  })

  it('gender is not contain number',()=>{
    var gendercontrol = component.registerForm.controls['gender']
    gendercontrol.setValue('mihir32434')
    expect(gendercontrol.valid).toBeFalsy();
  })
  
  it('gender is not contain special characters',()=>{
    var gendercontrol = component.registerForm.controls['gender']
    gendercontrol.setValue('mihr@')
    expect(gendercontrol.valid).toBeFalsy();
  })

  it('gender is not contain only whitespaces',()=>{
    var gendercontrol = component.registerForm.controls['gender']
    gendercontrol.setValue('  ')
    expect(gendercontrol.valid).toBeFalsy();
  })

  //contact
  it('contact is not empty - required',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is not contain character',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('gfgfg')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is not contain special character',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('4544504@22')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is not accept greater than 10 digits',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('4544530434922')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is not accept less than 10 digits',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('4544530')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is must be valid 10 digits',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('1223435678')
    expect(contactcontrol.valid).toBeFalsy();
  })

  it('contact is accept valid 10 digits',()=>{
    var contactcontrol = component.registerForm.controls['contact']
    contactcontrol.setValue('7843490343')
    expect(contactcontrol.valid).toBeTruthy();
  })
  

  //password
  it('password is not empty - required',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('')
    expect(passwordcontrol.valid).toBeFalsy();
  })

  it('password is minimum 8 digit required',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('Mihir')
    expect(passwordcontrol.valid).toBeFalsy();
  })

  it('password is not conatain uppercharater',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('mihir@1244')
    expect(passwordcontrol.valid).toBeFalsy();
  })

  it('password is not conatain lowercharater',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('MIHR@1244')
    expect(passwordcontrol.valid).toBeFalsy();
  })

  it('password is not conatain specialcharacter',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('Mihir1244')
    expect(passwordcontrol.valid).toBeFalsy();
  })

  it('password is accept valid',()=>{
    var passwordcontrol = component.registerForm.controls['password']
    passwordcontrol.setValue('Mdn@1234')
    expect(passwordcontrol.valid).toBeTruthy();
  })

});
 
