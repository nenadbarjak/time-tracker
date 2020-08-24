import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('showBack') showBack: boolean

  constructor(
    public authService:AuthService,
    private router:Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logoutUser().subscribe(() => {
      this.store.dispatch({type: 'LOGOUT'})
      localStorage.clear()
      this.router.navigate(['/'])
    },
    err => {
      console.log(err)
    })
  }

}
