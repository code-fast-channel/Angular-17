import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

const fb = new FormBuilder();

export const FORM_FIELDS = {
  userDetails: {
    label: 'User Details',
    formGroup: fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required]
    }),
    fields: {
      fullName: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        alias: 'fullName',
        controlType: 'input'
      },
      email: {
        label: 'Email Address',
        placeholder: 'Enter your email address',
        alias: 'email',
        controlType: 'input'
      }
    }
  },
  studentDetails: {
    label: 'Student Details',
    formGroup: fb.group({
      rollNumber: ['', Validators.required],
      course: ['', Validators.required]
    }),
    fields: {
      rollNumber: {
        label: 'Roll Number',
        placeholder: 'Enter your roll number',
        alias: 'Roll Number',
        controlType: 'input'
      },
      course: {
        label: 'Course',
        placeholder: 'Enter your course',
        alias: 'course',
        controlType: 'input'
      }
    }
  }
};


export const errMssg = {
  required: '{controlName} is required',
  minLength: '{controlName} should be minumum {length}',
  maxLength: '{controlName} should be maximum {length}'
}
