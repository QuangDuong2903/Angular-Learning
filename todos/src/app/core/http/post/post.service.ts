import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IPost from '../../../shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(post: IPost) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt_token') ?? ''
    })
    return this.http.post('http://localhost:8080/api/posts', post, {
      headers: headers
    })
  }
}
