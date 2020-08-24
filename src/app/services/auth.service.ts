import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt'

const setHeaders = () => {
  let authToken = localStorage.getItem('authToken')

  let headers = new HttpHeaders()
  headers = headers.append('Content-Type', 'application/json')
  if (authToken) {
    headers = headers.append('Authorization', `Bearer ${authToken}`)
  }

  return headers
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loggedIn() {
    let authToken = localStorage.getItem('authToken')
    const helper = new JwtHelperService()

    return !helper.isTokenExpired(authToken)
  }

  signUpUser(user:any):Observable<any> {
    let headers = setHeaders()

    return this.http.post<any>('http://localhost:3000/users', user, { headers })  
  }

  loginUser(credentials:any):Observable<any> {
    let headers = setHeaders()

    return this.http.post<any>('http://localhost:3000/login', credentials, { headers })
  } 

  logoutUser():Observable<any> {   
    let headers = setHeaders()
    
    return this.http.post<any>('http://localhost:3000/logout',{}, { headers })
  }
}
