import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { FORM_FIELDS,errMssg } from './reuse-form-fields.constant';
import { ButtonComponent } from '../../../shared/component/button/button.component';
@Component({
  selector: 'app-reuse-form-fields',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,CommonModule, ButtonComponent],
  templateUrl: './reuse-form-fields.component.html',
  styleUrl: './reuse-form-fields.component.scss'
})
export class ReuseFormFieldsComponent {
  FORM_FIELDS: any = FORM_FIELDS;
  errorMessage: any = errMssg;
  constructor() {
    console.log('sss', FORM_FIELDS)
  }

  formReset(type: string): void {
   this.FORM_FIELDS[type].formGroup.reset();
  }
}
