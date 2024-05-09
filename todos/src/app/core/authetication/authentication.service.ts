import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IAuth from '../../shared/models/auth.model';
import { concatMap, tap } from 'rxjs';
import ICategory from '../../shared/models/category.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(auth: IAuth) {
    return this.http.post<any>("http://localhost:8080/api/authenticate", auth)
    .pipe(
      tap(res => {
        if (res && res.id_token) 
          localStorage.setItem('jwt_token', res.id_token)
      }),
      concatMap(() => {
        let headers = new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('jwt_token') ?? ''
        })
        return this.http.get<any>('http://localhost:8080/api/account', {
          headers: headers
        })
      })
    )
    .pipe(
      tap(res => {
        if (res && res.id) 
          localStorage.setItem('user_id', res.id)
      })
    )
  }

  isAuthenticate() {    
    return localStorage.getItem('jwt_token') != null
  }
}
