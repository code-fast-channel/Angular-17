import { Component } from '@angular/core';
import {simpleFields, objForm} from './common-form.constant';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {getTypes, getFormControlsFields,getFormControlsFieldsObj} from '../../../shared/component/common-form/common-form.constant';
import {CommonFormComponent} from '../../../shared/component/common-form/common-form.component';
@Component({
  selector: 'app-common-form-consume',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,CommonFormComponent,CommonModule],
  templateUrl: './common-form-consume.component.html',
  styleUrl: './common-form-consume.component.scss'
})
export class CommonFormConsumeComponent {

  model: any = simpleFields;
  dynamicFormGroup: any;
  dynamicControls: any = [];

  // obj
  formObjModel: any = objForm;
  formObjFormGroup:any;
  dynamicObjControls: any = {};

  _object = Object;
  
  submitted :any = false;

  constructor(public fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.buildForm();
    this.dynamicFormGroup.valueChanges.subscribe((vals: any) => {
      this.checkFieldChanges(vals);
    });
  }

  submit() {
    this.submitted = true;
    console.log('form submitt',this.formObjFormGroup.value)
  }

  reset() {
    this.formObjFormGroup.reset();
    this.submitted = false;
  }

  checkedValues(val: any) {
    console.log('checked values', val);
  }

 private buildForm(): void {
    const formGroupFields = getFormControlsFields(this.model);
    console.log('formGroupFields brfore',formGroupFields,this.model)
    this.dynamicFormGroup = this.fb.group(formGroupFields);
    console.log('formGroupFields after',formGroupFields,this.model)
    this.model.forEach((element: any) => {
      this.dynamicControls.push(getTypes(element,this.dynamicFormGroup));
    });
    console.log('final',formGroupFields,this.dynamicControls)
    // obj
    const formGroupField= getFormControlsFieldsObj(this.formObjModel);
    console.log('formGroupField brfore',formGroupField,this.formObjModel)
    this.formObjFormGroup = this.fb.group(formGroupField);
    console.log('formGroupField after',formGroupField,this.formObjModel)
    Object.keys(this.formObjModel).forEach((element: any) => {
      this.dynamicObjControls[element] = getTypes(this.formObjModel[element],this.formObjFormGroup);
    });
    console.log('final',this.dynamicObjControls)

  }

  private checkFieldChanges(val: any) {
    this.dynamicFormGroup.get('Name').valueChanges.subscribe((vals: any) => {
      console.log('name', vals);
    });
    this.dynamicFormGroup.get('age').valueChanges.subscribe((vals: any) => {
      console.log('age', vals);
    });
  }


}
