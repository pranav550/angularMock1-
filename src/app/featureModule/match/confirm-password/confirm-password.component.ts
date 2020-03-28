import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  model: any = {};

  ngOnInit(){

  }

  // function for submit all field
  onSubmit(userForm) {
  if (userForm.invalid) {
    this.isValidFormSubmitted = false;
  }
  else {
    this.isValidFormSubmitted = true;
  }

  console.log(userForm.value);
}
}
