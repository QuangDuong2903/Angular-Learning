import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormFieldDef } from '../form.model';

interface Dictionary<T> {
    [Key: string]: T;
}

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(protected formBuilder: FormBuilder) { }

    initFormGroup(formArray: FormFieldDef[][], validators?: ValidatorFn[]): FormGroup {
        const formControlStates: Dictionary<any> = {};

        // type FormFieldDef[][], create FormArray with FormGroups is a array emlement (FormFieldDef[])
        const formGroupArray: FormGroup[] = formArray.map(formFields => this.initFormArrayElement(formFields));
        formControlStates['formArrayControl'] = new FormArray(formGroupArray, validators);

        return this.formBuilder.group(formControlStates, { validators: [] });
    }

    initPhoneFormGroup(formField: FormFieldDef): FormGroup {
        return new FormGroup({
            countryCallingCode: new FormControl(''),
            phoneNumber: new FormControl('', formField.validators)
        });
    }

    initFormArrayElement(formFields: FormFieldDef[]): FormGroup {
        const formGroup: Dictionary<any> = {};
        formFields.forEach(formField => {
            if (formField.dataType === 'phone') {
                formGroup[formField.name] = this.initPhoneFormGroup(formField);
            } else {
                formGroup[formField.name] = new FormControl(formField.initialValue, formField.validators);
            }
        });
        return new FormGroup(formGroup);
    }
}
