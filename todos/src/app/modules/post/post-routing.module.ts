import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

const routes: Routes = [
  {
    path: 'posts',
    // canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: PostListComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
