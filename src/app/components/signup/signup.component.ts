import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', [
      Validators.minLength(6)
    ])
  })

  isSubmitted: boolean = false
  resError: boolean = false

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value

      this.authService.signUpUser(user).subscribe(data => {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/dashboard'])
      },
      err => {
        this.resError = true
        console.log(err.message)
      })
    }
    
  }

}
