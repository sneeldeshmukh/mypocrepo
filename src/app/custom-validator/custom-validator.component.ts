import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit, OnChanges {


  customValidForm: FormGroup;
  private customValidator = new CustomValidator();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.customValidForm = this.formBuilder.group({
       name: [null, [Validators.required, this.customValidator.onlyNumberValidator]]
     });
  }
  ngOnChanges() {
    this.customValidForm.setValue({name: 's'});
    console.log('form value', this.customValidForm.controls);
  }
}
