import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MockService } from './../../../shared/services/mock.service';
import { Data } from './../../../shared/models/data';
@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  records: Data[];
  error: string;
  constructor(
    private service: MockService,
    private spinner: NgxSpinnerService,
    private translate:TranslateService
     ) {
      translate.addLangs(['en', 'hn']);
      if (localStorage.getItem('locale')) {
        const browserLang = localStorage.getItem('locale');
        translate.use(browserLang.match(/en|hn/) ? browserLang : 'en');
      } else {
        localStorage.setItem('locale', 'en');
        translate.setDefaultLang('en');
      }
      }

  ngOnInit(): void {
    this.getRecords()
   this.changeLanguage()
  }

  

  // call get data function
  public getRecords(): void {
    this.spinner.show();
    this.service.getData().subscribe((data) => {
      this.spinner.hide();
      this.records = data.results;
    }, (error) => {
      // this.error=error
    })
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

  

}
