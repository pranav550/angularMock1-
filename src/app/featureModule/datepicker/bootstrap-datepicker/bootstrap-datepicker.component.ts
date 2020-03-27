import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-datepicker',
  templateUrl: './bootstrap-datepicker.component.html',
  styleUrls: ['./bootstrap-datepicker.component.css']
})
export class BootstrapDatepickerComponent implements OnInit {
  minDate: Date;
  constructor() { }

  ngOnInit(): void {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
  }

}
