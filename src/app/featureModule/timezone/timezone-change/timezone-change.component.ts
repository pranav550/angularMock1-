import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-timezone-change',
  templateUrl: './timezone-change.component.html',
  styleUrls: ['./timezone-change.component.css']
})
export class TimezoneChangeComponent implements OnInit {
  public selectedMoment:any ;
  timez:any=[];
  
  constructor( ) { 
   
  }

  ngOnInit(): void {
  this.getTimezone()
  }

  //function for get timezone
  getTimezone(){
    
    this.timez=[
    {id:1,name:"IST", time:moment(this.selectedMoment).utcOffset("+05:30").format("M/DD/YYYY, hh:mm A")},
    {id:2,name:"PST", time:moment(this.selectedMoment).utcOffset("-08:00").format("M/DD/YYYY, hh:mm A")},
    {id:3,name:"Mountain Time", time:moment(this.selectedMoment).utcOffset("-07:00").format("M/DD/YYYY, hh:mm A")},
    {id:4,name:"UTC", time:moment(this.selectedMoment).utc().format("M/DD/YYYY, hh:mm A")},
    {id:5,name:"CST", time:moment(this.selectedMoment).utcOffset('-06:00').format("M/DD/YYYY, hh:mm A" )},
  ]
  }
  // function for change date
  selectedDate(val){
    this.selectedMoment = val;
    this.getTimezone()
  }

}
