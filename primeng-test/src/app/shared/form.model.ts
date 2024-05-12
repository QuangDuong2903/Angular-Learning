import { ValidatorFn } from '@angular/forms';

export enum FORM_INPUT_TYPE {
    TEXT = 'text',
    SELECTION = 'selection',
    PHONE = 'phone',
    DATE = 'date'
}

export interface FormFieldSelectionOptions {
    optionKeyname: string;
    optionDisplayname: string;
    optionData?: any[];
    classes?: string;
    display(option: any, optionKeyname: string, optionDisplayname: string): string | null | undefined;
    onClick?(selectionOptions: FormFieldSelectionOptions): void;
    translationPrefix?: string;
    isFilter?: boolean;
    filterBy?: string;
}

export interface FormFieldTextareaOptions {
    rows: number;
    maxlength: number;
    classes?: string;
}

export interface FormFieldFilePickerOptions {
    onFileChange: any;
    accept: string;
    classes?: string;
    warningMessage?: string;
    fileNameLabel: string;
}

export interface FormFieldAutoCompletionOptions {
    filteredList: any[];
    completeMethod: any;
    optionKeyname: string;
    optionDisplayname: string;
    optionSelectedDisplayname?: string;
    multipleSelection: boolean;
}

export interface FormFieldDateOptions {
    changeDate(date: Date, formFieldName: string): void;
    minDate?: Date;
    maxDate?: Date;
}

export type FormElementInstance = string | FormFieldDef | FormFieldDef[][];

export interface FormFieldDef {
    name: string;
    dataType: string;
    isDisplayByDefault: boolean;
    colSpan?: string;
    initialValue?: any;
    validators?: ValidatorFn[] | null;
    placeholder?: string;
    label?: string;
    selectionOptions?: FormFieldSelectionOptions | null;
    textareaOptions?: FormFieldTextareaOptions | null;
    filePickerOptions?: FormFieldFilePickerOptions | null;
    autocompleteOptions?: FormFieldAutoCompletionOptions | null;
    dateOptions?: FormFieldDateOptions | null;
    styleClass?: string;
}
