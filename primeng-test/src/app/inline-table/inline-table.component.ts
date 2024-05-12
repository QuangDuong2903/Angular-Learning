import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';  
import { FormFieldDef } from '../shared/form.model';
import { AbstractControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableColumn } from '../shared/table-column.model';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const INLINE_TABLE_MIN_DATE = new Date('1700-01-01');
const INLINE_TABLE_MAX_DATE = new Date('2500-01-01');
const DATE_TIME_ZONE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]';

@Component({
  selector: 'app-inline-table',
  standalone: true,
  imports: [TableModule, ReactiveFormsModule, CommonModule, AutoCompleteModule, DropdownModule, NgbModule],
  templateUrl: './inline-table.component.html',
  styleUrl: './inline-table.component.scss'
})
export class InlineTableComponent {
  @Input() formArray: FormFieldDef[][] = [];
  @Input() inputForm!: FormGroup;
  @Input() tableColumns?: TableColumn[];
  readonly DEFAULT_MIN_DATE = INLINE_TABLE_MIN_DATE;
  readonly DEFAULT_MAX_DATE = INLINE_TABLE_MAX_DATE;

  get formArrayControl(): AbstractControl[] {
    return (this.inputForm.get('formArrayControl') as FormArray).controls;
  }

  formGroupDetailCollapse: boolean[] = [];
  Object = Object;
  // currentDateFormat: string = DATE_FORMAT.vi.format;
  // constructor(
  //   protected translateService: TranslateService,
  //   protected formErrorService: FormErrorService,
  //   protected filterService: FilterService,
  //   protected stringUtils: StringUtils
  // ) {}

  ngOnInit(): void {
    console.log(this.formArray, this.inputForm, this.tableColumns, this.formArrayControl)
    this.formGroupDetailCollapse = this.formArray.map(() => false);
    this.formArrayControl.at(0)?.patchValue({
      firstName: 'Duong'
    })
  }

  // Method use for map the function passed on parent component when click options
  getOnClickHandlerForDropDown(selectionOptions: any): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return selectionOptions?.onClick ? () => selectionOptions.onClick(selectionOptions) : () => void 0; // In the false case, it means do nothing.
  }

  getDropdownOptionItem(formFieldDef: FormFieldDef, item: Record<string, unknown>): string {
    const translationPrefix = formFieldDef.selectionOptions?.translationPrefix;
    const displayMessage = formFieldDef.selectionOptions?.display(
      item,
      formFieldDef.selectionOptions.optionKeyname,
      formFieldDef.selectionOptions.optionDisplayname
    );
    return translationPrefix ? translationPrefix + '.' + displayMessage : displayMessage ?? '';
  }
}
