import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-timezone-change',
  templateUrl: './timezone-change.component.html',
  styleUrls: ['./timezone-change.component.css']
})
export class TimezoneChangeComponent implements OnInit {
  public selectedMoment = new Date();
  constructor() { 
   
  }

  ngOnInit(): void {
    console.log(moment().utcOffset("+05:30").format(), "IST")//ist
    console.log(moment().utcOffset("-08:00").format(),"PST")//pst
    console.log(moment().utcOffset("-07:00").format(),"mountain time")//mountain time
    console.log(moment().utc().format(),"utc")//utc
    console.log(moment().utcOffset('-06:00').format(),"cst")// cst
  }
  // test = [new Date(), new Date()];


}
