import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
import { ImageListComponent } from './pages/image-list/image-list.component';

const routes: Routes = [
  {
    path: 'pictures',
    component: ImageListComponent
  },
  {
    path: 'pictures/:id',
    component: ImageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureRoutingModule { }
