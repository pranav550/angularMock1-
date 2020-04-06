import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bootstrap-datepicker',
  templateUrl: './bootstrap-datepicker.component.html',
  styleUrls: ['./bootstrap-datepicker.component.css']
})
export class BootstrapDatepickerComponent implements OnInit {
  minDate: Date;
  constructor(
    private translate:TranslateService,
    private service:MockService
  ) { }

  ngOnInit(): void {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
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

}
