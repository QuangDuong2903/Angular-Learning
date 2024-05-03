import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PictureService } from '../../../../core/http/picture/picture.service';
import IPicture from '../../../../shared/models/picture.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.css'
})
export class ImageDetailComponent implements OnInit {

  id: string = ''
  img: IPicture | null = null

  constructor(private route: ActivatedRoute, private pictureService: PictureService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id = params['id'])
    this.pictureService.getOneImage(this.id).subscribe(data => this.img = data)
  }

}
