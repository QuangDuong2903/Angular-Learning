import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../../../core/http/picture/picture.service';
import IPicture from '../../../../shared/models/picture.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent implements OnInit {
  
  images: IPicture[] = []

  constructor(private pictureService: PictureService) {

  }
  ngOnInit(): void {
    this.pictureService.getListImages().subscribe((data: IPicture[]) => this.images = data)
  }

}
