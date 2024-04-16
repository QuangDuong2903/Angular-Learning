import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import IUser from '../../models/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isSubmission = false

  constructor(private auth: AuthService) {}

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })

  showAlert = false
  alertMsg = 'Please wait! Your account is being created'
  alertColor = 'blue'

  async register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created'
    this.alertColor = 'blue'
    this.isSubmission = true

    try {
      await this.auth.createUser(this.registerForm.value as IUser)
    } catch (e) {
      console.error(e)
      this.alertMsg = 'An unexpected error occurred. Please try again'
      this.alertColor = 'red'
      this.isSubmission = false
      return
    }

    this.alertMsg = 'Success! You have successfully created.'
    this.alertColor = 'green'
  }
}
