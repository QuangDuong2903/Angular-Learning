import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IPicture from '../models/picture.models';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getListImages() {
    return this.http.get<IPicture[]>('https://picsum.photos/v3/list')
  }
}
