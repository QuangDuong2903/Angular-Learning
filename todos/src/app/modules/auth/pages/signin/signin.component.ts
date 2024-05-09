import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../core/authetication/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  username = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  })

  password = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  })

  signinForm = new FormGroup({
    username: this.username,
    password: this.password
  })

  signin() {
    this.authService.authenticate({
      username: this.username.value,
      password: this.password.value,
      rememberMe: false
    }).subscribe(() => this.router.navigateByUrl('/'))
  }

}
