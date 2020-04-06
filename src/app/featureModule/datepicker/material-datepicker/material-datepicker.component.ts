import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent implements OnInit {
  minDate=new Date();
 
  constructor(
    private translate:TranslateService,
    private service:MockService
  ) { }

  ngOnInit(): void {
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
