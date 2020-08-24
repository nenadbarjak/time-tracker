import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
export class TimesService {

  constructor(private http: HttpClient) { }

  getTimes():Observable<any> {
    let headers = setHeaders()

    return this.http.get('http://localhost:3000/times', { headers })
  }

  addTime(time):Observable<any> {
    let headers = setHeaders()

    return this.http.post('http://localhost:3000/times', time, { headers })
  }

  deleteTime(id:string):Observable<any> {
    let headers = setHeaders()

    return this.http.delete(`http://localhost:3000/times/${id}`, { headers })
  }
}
