import { User } from './../../../shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  user:User = {
    name: '',
    email: '',
    gender: '',
    mobile: '',
    country: '',
    description: '',
    accept: ''
  };
  countryList: any = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Japan" },

  ];
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
