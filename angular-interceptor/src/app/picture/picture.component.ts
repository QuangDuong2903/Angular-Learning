import { Component } from '@angular/core';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {

  constructor(private pictureService: PictureService) {
    pictureService.getListImages().subscribe(data => console.log(data))
  }

}
