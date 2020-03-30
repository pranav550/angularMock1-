import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent implements OnInit {
  minDate=new Date()
 // date=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
