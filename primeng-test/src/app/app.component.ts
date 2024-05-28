import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { InlineTableColumn, TableColumn } from './shared/table-column.model';
import { FORM_INPUT_TYPE, FormFieldDef } from './shared/form.model';
import { FormGroup, Validators } from '@angular/forms';
import { FormService } from './shared/utils/form-service';
import { TableComponent } from './table/table.component';
import { MediaCollectionComponent } from './media-collection/media-collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InlineTableComponent, TableComponent, MediaCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-test';

  travelerFormArray: FormFieldDef[][] = [];
  travelerForm!: FormGroup;

  initArrayForm: Number[] = [1, 2, 3, 4];

  readonly FORM_CONTROL_NAME = {
    honorific: 'honorific',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    national: 'national',
    address: 'address',
    zipCode: 'zipCode',
    countryCallingCode: 'countryCallingCode',
    phoneNumber: 'phoneNumber',
    nationality: 'nationality',
    passport: 'passport',
    issuingCountry: 'issuingCountry',
    phoneGroup: 'phoneGroup',
    formArrayControl: 'formArrayControl',
    city: 'city',
    expirationDate: 'expirationDate',
    dateOfBirth: 'dateOfBirth'
  };
  SINGLE_MAX_FULL_NAME_LENGTH = 30;
  ADULT_AND_CHILD_MAX_FULL_NAME_LENGTH = 33;
  nameValidators = [
    Validators.required,
    // NotNumberValidator.NotNumberValidator,
    // NamesValidator.noAccentName(),
    Validators.minLength(2),
    Validators.maxLength(this.SINGLE_MAX_FULL_NAME_LENGTH),
    // WhiteSpaceValidators.noOnlyWhiteSpaceValidator
  ];

  buildTableColumns(): InlineTableColumn[] {
    return [
      {
        headerText: 'honorific',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.honorific',
        width: 100,
        required: true
      },
      {
        headerText: 'lastName',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.lastName',
        width: 90,
        required: true
      },
      {
        headerText: 'firstName',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.firstName',
        width: 135,
        required: true
      },
      {
        headerText: 'dateOfBirth',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.dateOfBirth',
        width: 110,
        required: true
      },
      {
        headerText: 'nationality',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.nationality',
        width: 110,
        required: true
      },
      {
        headerText: 'passport',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.passport',
        width: 110,
        required: true
      },
      {
        headerText: 'issuingCountry',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.issuingCountry',
        width: 130,
        required: true
      },
      {
        headerText: 'expirationDate',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.expirationDate',
        width: 130,
        required: true
      },
      {
        headerText: 'phoneNumber',
        headerTranslationPath: 'gatewayApp.flight.fillingTravelerInfo.contactForm.phoneNumber',
        width: 160,
        required: false
      }
    ];
  }

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    // this.initData();
    // this.checkScreenSize();
    // this.updateAllItems('holding');
    // this.updateAllItems('cart');
    this.resetTravelerForm();
  }

  resetTravelerForm(): void {
    this.travelerFormArray = this.buildTravelerFormField();
    this.travelerForm = this.formService.initFormGroup(this.travelerFormArray, []);
  }

  buildTravelerFormField(): FormFieldDef[][] {
    return this.initArrayForm.map(index => [
      {
        name: this.FORM_CONTROL_NAME.honorific,
        dataType: FORM_INPUT_TYPE.SELECTION,
        isDisplayByDefault: true,
        // initialValue: PASSENGER_TITLE.filter(title => title.applyFor === travelerPricing.travelerType)[0],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactForm.honorific',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.honorific',
        selectionOptions: {
          optionData: 'PASSENGER_TITLE',
          optionDisplayName: 'code',
          optionKeyName: 'id',
          render(option: any, optionKeyname: string, optionDisplayname: string) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return option[optionDisplayname];
          },
          translationPrefix: 'gatewayApp.flight.traveler'
        }
      },
      {
        name: this.FORM_CONTROL_NAME.lastName,
        dataType: FORM_INPUT_TYPE.TEXT,
        isDisplayByDefault: true,
        validators: this.nameValidators,
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.lastName',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.lastName',
        styleClass: 'ba-last-name'
      },
      {
        name: this.FORM_CONTROL_NAME.firstName,
        dataType: FORM_INPUT_TYPE.TEXT,
        isDisplayByDefault: true,
        validators: this.nameValidators,
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.firstName',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.firstName'
      },
      {
        name: this.FORM_CONTROL_NAME.dateOfBirth,
        dataType: FORM_INPUT_TYPE.DATE,
        isDisplayByDefault: true,
        colSpan: 'col-12 col-md-6',
        // initialValue: this.dateOfBirthRestrictions.get('')?.default,
        validators: [Validators.required],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.dateOfBirth',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.dateOfBirth',
        dateOptions: {
          changeDate: () => 0,
          // maxDate: this.dateOfBirthRestrictions.get('')?.max as Date,
          // minDate: this.dateOfBirthRestrictions.get('')?.min as Date
        },
        styleClass: 'ba-calendar-chosen'
      },
      {
        name: this.FORM_CONTROL_NAME.nationality,
        dataType: FORM_INPUT_TYPE.SELECTION,
        isDisplayByDefault: true,
        // initialValue: this.listCountries.find(e => e.iataCode == DEFAULT_COUNTRY_CODE),
        validators: [Validators.required],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.nationality',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.nationality',
        undefined,
        selectionOptions: {
          // optionData: this.listCountries,
          optionDisplayname: 'countryNameI18n',
          optionKeyname: 'iataCode',
          render(option: any, optionKeyname: string, optionDisplayname: string) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return option[optionDisplayname];
          },
          isFilter: true,
          filterBy: 'countryNameI18n'
        },
        styleClass: 'ba-country-dropdown'
      },
      {
        name: this.FORM_CONTROL_NAME.passport,
        dataType: FORM_INPUT_TYPE.TEXT,
        isDisplayByDefault: true,
        validators: [Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.maxLength(9), Validators.required],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.passport',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.passport'
      },
      {
        name: this.FORM_CONTROL_NAME.issuingCountry,
        dataType: FORM_INPUT_TYPE.SELECTION,
        isDisplayByDefault: true,
        // initialValue: this.listCountries.find(e => e.iataCode == DEFAULT_COUNTRY_CODE),
        validators: [Validators.required],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.issuingCountry',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.issuingCountry',
        selectionOptions: {
          // optionData: this.listCountries,
          optionDisplayname: 'countryNameI18n',
          optionKeyname: 'iataCode',
          render(option: any, optionKeyname: string, optionDisplayname: string) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return option[optionDisplayname];
          },
          isFilter: true,
          filterBy: 'countryNameI18n'
        },
        styleClass: 'ba-country-dropdown'
      },
      {
        name: this.FORM_CONTROL_NAME.expirationDate,
        dataType: FORM_INPUT_TYPE.DATE,
        isDisplayByDefault: true,
        validators: [
          Validators.required
          // DateTimeValidator.validateMinDate(dayjs(getLastSegmentArrivalTime(this.bookedFlight!)).add(6, 'month').toDate())
        ],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactFormSample.expirationDate',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.expirationDate',
        styleClass: 'ba-calendar-chosen'
      },
      {
        name: this.FORM_CONTROL_NAME.phoneGroup,
        dataType: FORM_INPUT_TYPE.PHONE,
        isDisplayByDefault: true,
        validators: [Validators.maxLength(15)],
        placeholder: 'gatewayApp.flight.fillingTravelerInfo.contactForm.phoneNumber',
        label: 'gatewayApp.flight.fillingTravelerInfo.contactForm.phoneNumber',
        styleClass: 'ba-phone-input-group'
      }
    ]) as FormFieldDef[][];
  }
}
