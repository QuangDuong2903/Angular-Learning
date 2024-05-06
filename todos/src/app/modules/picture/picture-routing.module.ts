import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
import { ImageListComponent } from './pages/image-list/image-list.component';
import { EditImageComponent } from './pages/edit-image/edit-image.component';
import { canEditImageGuard } from '../../core/guards/can-edit-image.guard';

const routes: Routes = [
  {
    path: 'pictures',
    children: [
      {
        path: '',
        component: ImageListComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ImageDetailComponent,
          },
          {
            path: 'edit',
            component: EditImageComponent,
            canActivate: [canEditImageGuard]
          }
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureRoutingModule { }
