import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { TranslateService } from '@ngx-translate/core';
import { Time } from './../../../shared/models/time';
import { MockService } from './../../../shared/services/mock.service';

@Component({
  selector: 'app-timezone-change',
  templateUrl: './timezone-change.component.html',
  styleUrls: ['./timezone-change.component.css']
})
export class TimezoneChangeComponent implements OnInit {
  public selectedMoment:Date ;
  timez:Time[];
  
  constructor( 
    private service: MockService,
    private translate:TranslateService
  ) { 
   
  }

  ngOnInit(): void {
  this.getTimezone();
  this.changeLanguage()
  }

   //function for language change
   changeLanguage(){
    this.service.getLang.subscribe(resp=>{
    this.translate.addLangs(['en', 'hn']);
      if (localStorage.getItem('locale')) {
        const browserLang = localStorage.getItem('locale');
        this.translate.use(browserLang.match(/en|hn/) ? browserLang : 'en');
      } else {
        localStorage.setItem('locale', 'en');
        this.translate.setDefaultLang('en');
      }
    })
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
    this.getTimezone();
  }

}
