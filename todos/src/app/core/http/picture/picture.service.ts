import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IPicture from '../../../shared/models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getListImages() {
    return this.http.get<IPicture[]>('https://picsum.photos/v2/list')
  }

  getOneImage(id: string) {
    return this.http.get<IPicture>(`https://picsum.photos/id/${id}/info`)
  }
}
