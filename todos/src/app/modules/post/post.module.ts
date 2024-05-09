import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
