import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICategory from '../../../shared/models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getListCategory() {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt_token') ?? ''
    })
    return this.http.get<ICategory[]>('http://localhost:8080/api/categories', {
      headers: headers
    })
  }
}
