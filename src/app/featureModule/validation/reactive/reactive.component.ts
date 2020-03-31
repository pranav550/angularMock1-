import { Country } from './../../../shared/models/country';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constant } from '../../../shared/constant';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  countries: Country[] = Constant.countryList;
  isSubmit: boolean = false
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9]).{10}')]),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
  })



  ngOnInit() {

  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  get country() {
    return this.contactForm.get('mobile');
  }

  get description() {
    return this.contactForm.get('mobile');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  // check the form is or not while submitting
  onSubmit() {
    if (this.contactForm.invalid) {
      this.isSubmit = true;
    }
    else {
      this.isSubmit = false;
    }
    console.log(this.contactForm.value);
  }


}
