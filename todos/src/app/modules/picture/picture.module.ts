import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
import { ImageListComponent } from './pages/image-list/image-list.component';
import { ImageCardComponent } from './pages/image-list/image-card/image-card.component';


@NgModule({
  declarations: [
    ImageDetailComponent,
    ImageListComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    PictureRoutingModule
  ],
  exports: [
    ImageDetailComponent,
    ImageListComponent,
    ImageCardComponent
  ]
})
export class PictureModule { }
