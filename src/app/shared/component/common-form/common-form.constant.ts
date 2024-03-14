import {
    FormBuilder,
    Validators,
    ValidationErrors,
    AbstractControl,
  } from '@angular/forms';
  
  export function getFormControlsFields(model: any) {
    const formGroupFields: any = {};
    model.forEach((element: any) => {
      if (['multiplecheckbox'].includes(element.type)) {
        
      } else {
        formGroupFields[element.name] = ['', element.validatiors ?? []];
      }
    });
    return formGroupFields;
  }

  export function getFormControlsFieldsObj(val: any) {
    const obj: any= {};
    Object.keys(val).forEach((element: any) => {
      if (['multiplecheckbox'].includes(element.type)) {
        
      } else {
        obj[val[element].name] = ['', val[element].validatiors ?? []];
      }
    });
    return obj;
  }
  
  export function getTypes(key: any, dynamicFormGroup: any) {
    let val: any = {
      control: dynamicFormGroup.controls[key.name],
      submitted: key.submitted ?? false,
      label: key.label ?? key.name,
      inputId: key.name ?? key.name,
      aliasName: key.aliasName,
      type: key.type,
      optionalErrorMessage: key.optionalErrorMessage ?? {},
    };
    if (['radio', 'select', 'multiplecheckbox'].includes(key.type)) {
      val.customData = key.customData;
    }
    return val;
  }
  