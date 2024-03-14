import {
    FormBuilder,
    Validators,
    ValidationErrors,
    AbstractControl,
  } from '@angular/forms';
  
  export const simpleField = [
    {
      name: 'Name',
      validatiors: [Validators.required, Validators.minLength(2)],
      type: 'text',
    },
    {
      name: 'age',
      validatiors: [],
      type: 'number',
    },
  ];
  
  // multiple fields
  export const simpleFields = [
    {
      name: 'Name',
      validatiors: [Validators.required, Validators.minLength(2)],
      type: 'text',
    },
    {
      name: 'age',
      validatiors: [],
      type: 'number',
    },
    {
      name: 'gender',
      label: 'Gender',
      validatiors: [Validators.required],
      inputId: 'gender',
      aliasName: 'gender Field',
      type: 'select',
      customData: {
        data: [
          { name: 'male', ids: '0' },
          { name: 'female', ids: '1' },
        ],
        key: 'name',
        value: 'ids',
      },
    },
    {
      name: 'accept terms and condition',
      type: 'checkbox',
      validatiors: [Validators.requiredTrue],
    },
    {
      name: 'radio levels',
      label: 'levels',
      validatiors: [Validators.required],
      type: 'radio',
      customData: {
        data: [
          { name: 'male', ids: '0' },
          { name: 'female', ids: '1' },
        ],
        key: 'name',
        value: 'ids',
      },
    },
    {
      label: 'schools',
      type: 'multiplecheckbox',
      customData: {
        data: [
          { name: 'sgsgs', id: 0, checked: false },
          { name: 'gsgs', id: 1, checked: false },
          { name: 'gsgsgs', id: 2, checked: true },
        ],
        key: 'name',
        value: 'id',
        isSelectAll: false,
        enableSelectAll: true, // if you want select all option
        enableValidation: true, // if you want validation
        checkedDatas: [],
      },
    },
  ];
  

  export const objForm = {
    _Name: {
        name: 'Name',
        validatiors: [Validators.required, Validators.minLength(2)],
        type: 'text',
    },
    _Age: {
        name: 'age',
        validatiors: [],
        type: 'number',
    }
  }