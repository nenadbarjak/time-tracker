import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TimesService } from '../../services/times.service'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password: new FormControl('')
  })

  isSubmitted: boolean = false
  resError: boolean = false

  constructor(
    private authService:AuthService,
    private timesService:TimesService,
    private router:Router,
    private store: Store
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true

    if (this.signInForm.valid) {
      const credentials = this.signInForm.value

      this.authService.loginUser(credentials).subscribe(data => {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
  
        this.timesService.getTimes().subscribe(data => {
          this.store.dispatch({type: 'SET_TIMES', payload:{times: data}})
          this.router.navigate(['/dashboard'])
        })
      },
      err => {
        this.resError = true
        console.log(err.message)
      }) 
    }
  }

}
