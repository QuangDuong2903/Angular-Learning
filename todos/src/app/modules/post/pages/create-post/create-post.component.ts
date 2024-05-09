import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PictureService } from '../../../../core/http/picture/picture.service';
import IPicture from '../../../../shared/models/picture.model';
import ICategory from '../../../../shared/models/category.models';
import { CategoryService } from '../../../../core/http/category/category.service';
import { forkJoin } from 'rxjs';
import { PostService } from '../../../../core/http/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent implements OnInit {
  images: IPicture[] = [];
  categories: ICategory[] = [];

  constructor(
    private pictureService: PictureService,
    private categoryService: CategoryService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    forkJoin(
      [
        this.pictureService.getListImages(),
        this.categoryService.getListCategory(),
      ],
      (imageList, categoryList) => {
        return {
          images: imageList,
          categories: categoryList,
        };
      }
    ).subscribe({
      next: (res) => {
        this.images = res.images;
        this.categories = res.categories;
      },
      error: (err) => alert(err.message),
    });
  }

  name = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  thumbnail = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  content = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  category = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  createPostForm = new FormGroup({
    name: this.name,
    thumbnail: this.thumbnail,
    content: this.content,
    category: this.category,
  });

  createPost() {
    // console.log({
    //   name: this.name.value,
    //   thumbnial: this.thumbnail.value,
    //   content: this.content.value,
    //   category: this.category.value,
    // });
    this.postService
      .createPost({
        name: this.name.value,
        thumbnail: this.thumbnail.value,
        content: this.content.value,
        category: { id: parseInt(this.category.value) },
        user: { id: parseInt(localStorage.getItem('user_id') ?? '') },
      })
      .subscribe(console.log);
  }
}
