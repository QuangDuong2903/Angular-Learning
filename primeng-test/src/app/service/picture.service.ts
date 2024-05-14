import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  unreadCount$: BehaviorSubject<any> = new BehaviorSubject(1);

  constructor(private http: HttpClient) { }

  getOnePicture(id: string) {
    return this.http.get(`https://picsum.photos/id/${id}/info`)
  }
}
