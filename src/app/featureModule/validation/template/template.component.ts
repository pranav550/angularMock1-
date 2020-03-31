import { Component, OnInit } from '@angular/core';
import { Country } from './../../../shared/models/country';
import { User } from './../../../shared/models/user';
import { Constant } from "../../../shared/constant";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  countryList: Country[] = Constant.countryList;
  user: User = {
    name: '',
    email: '',
    gender: '',
    mobile: '',
    country: '',
    description: '',
    accept: ''
  };

  constructor() { }

  // on Check the form invalid while on submit
  public onSubmit(contactForm) {
    if (contactForm.invalid) {
      this.isValidFormSubmitted = false;
    }
    else {
      this.isValidFormSubmitted = true;
    }

    console.log(contactForm.value);
  }

  ngOnInit(): void {
  }

}
