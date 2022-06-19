import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new UntypedFormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new UntypedFormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100)
  ])
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new UntypedFormControl('', [
    Validators.required
  ])
  phoneNumber = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(12)
  ])

  registerForm = new UntypedFormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber

  })

}
