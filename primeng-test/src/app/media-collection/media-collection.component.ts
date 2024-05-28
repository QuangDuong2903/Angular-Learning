import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnotherFormComponent } from '../another-form/another-form.component';

@Component({
  selector: 'app-media-collection',
  standalone: true,
  imports: [AnotherFormComponent],
  templateUrl: './media-collection.component.html',
  styleUrl: './media-collection.component.scss'
})
export class MediaCollectionComponent implements OnInit {

  imagesFormGroup!: FormGroup;
  // imageGroups: FromGroupDef[][] = [];

  data =
    {
      key: 'dsfsdf',
      description: 'ahihi',
      images: [
        {
          id: 1,
          imageLink: 'link 1',
          description: 'sdfsdfsd'
        },
        {
          id: 2,
          imageLink: 'link 2',
          description: 'sdfsdsdfdssdfsd'
        }
      ]
    }

  constructor(
    protected formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initFormGroup()
  }

  initFormGroup(): void {
    // this.imageFormGroups = this.buildFormGroupWithGroups(this.getImageFormGroupDef(1))
    // return this.formBuilder.group({});
    this.imagesFormGroup = this.buildFormGroupWithGroups(this.getImageFormGroupDef(0))
    console.log(this.imagesFormGroup)
  }

  getImageFormGroupDef(formIndex: number) {
    return [
      {
        groupNumber: formIndex,
        groupName: undefined,
        formFields: [
          {
            name: 'images',
            dataType: 'IMAGE_WITH_TEXT',
            colSpan: '',
            initialValue: this.data.images,
            isDisplay: true
          }
        ]
      }
    ];
  }

  buildFormGroupWithGroups(groups: any[]) {
    const formControlStates: any = {};
    groups.map(group => group.formFields).forEach(formFields => formFields.forEach((formField: any) => {
      // formControlStates[formField.name] = [formField.initialValue, formField.validators]
      formControlStates[formField.name] = this.createFormArray(formField);
    }))
    return this.formBuilder.group(formControlStates)
  }

  createFormArray(formField: any): FormArray {
    const groups: FormGroup[] = []
    formField.initialValue.forEach((value: any) => {
      groups.push(this.createImageWithTextFormGroup(value))
    })
    return this.formBuilder.array(groups)
  }

  
  createImageWithTextFormGroup(image: any): FormGroup {
    return this.formBuilder.group({
      image: [image],
      description: [image.description]
    });
  }
}
