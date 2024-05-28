import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-another-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './another-form.component.html',
  styleUrl: './another-form.component.scss'
})
export class AnotherFormComponent {

  @Input() formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  get ImagesFormArray(): FormArray {
    return this.formGroup?.get('images') as FormArray;
  }

  addTextWithImageItem(): void {
    this.ImagesFormArray.push(this.formBuilder.group({
      image: '',
      description: ''
    }));
  }

}
