import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Data } from './../../../shared/models/data';

@Component({
  selector: 'app-pagination-child',
  templateUrl: './pagination-child.component.html',
  styleUrls: ['./pagination-child.component.css']
})
export class PaginationChildComponent implements OnInit {
  @Input() records: Data[];
  @Input() page: number;
  @Input() totalRecords: number;
  constructor(
    private translate:TranslateService,
    private service:MockService
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
