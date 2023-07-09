import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { CommuteService } from '../commute.service';


@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent {

  

  constructor(public fbobj : FormBuilder, private sharedService: CommuteService)
  {}

  setData() {
    this.sharedService.setData(this.inputValue);
  }

  inputValue: string = '';

  
  
  MarvellousForm = this.fbobj.group(
    {
      // Add Multiple validations
      username :['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)] ],
      phone : ['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      email : ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)]],
      city :['', [Validators.required,Validators.pattern(/^(.*[a-zA-Z]){4}/)]],
      state : [''],
      zip : ['',[Validators.required,Validators.pattern(/^\d{6}$/)]],
      Comments : ['',[Validators.required,Validators.pattern(/^.{20,}$/)]]
      
    }
  )

  

  errorMessages: any = {

    username: {     
      required: 'First name is required.',
      pattern : 'Enter only alphabets.'
    }, 

    phone: {     
      required: 'Phone number is required.',
      pattern : 'Enter 10 digit phone number.',
      
    },
   
    email: {     
      required: 'Email is required.',
      pattern: 'Invalid email format.'
    },

    city: {     
      required: 'City name is required.',
      pattern: 'Enter valid city name.'
    },

    zip: {     
      required: 'ZipCode is required.',
      pattern : 'Enter 6 digit ZipCode.'
      
    },
    
    Comments: {     
      required: 'Comment is required.',
      pattern : 'Enter at least 20 characters.'
      
    }
    
   
  };

  getErrorMessage(controlName: string) {
    const control = this.MarvellousForm.get(controlName);
    if (control?.errors) {
      const errors = Object.keys(control.errors);
      const errorMessage : string[] = [];
      errors.forEach(error => {
        errorMessage.push(this.errorMessages[controlName][error]);
      });
      return errorMessage.join(' ');
    }
    return '';
  }

}
