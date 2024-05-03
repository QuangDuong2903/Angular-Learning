import { Component, Input, OnInit } from '@angular/core';
import IPicture from '../../../../../shared/models/picture.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent implements OnInit {


  @Input() img: IPicture | null = null

  ngOnInit(): void {
    // console.log(this.img?.dowload_url);
    
  }

}
