import { MockService } from './../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public service: MockService,
    public translate: TranslateService) {
    translate.addLangs(['en', 'hn']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/en|hn/) ? browserLang : 'en');
    } else {
      localStorage.setItem('locale', 'en');
      translate.setDefaultLang('en');
    }
  }
  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
    this.service.lang.next(language);
  }

  ngOnInit() {
    
  }

}
