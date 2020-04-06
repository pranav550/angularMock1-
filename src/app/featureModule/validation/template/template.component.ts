import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Country } from './../../../shared/models/country';
import { User } from './../../../shared/models/user';
import { Constant } from "../../../shared/constant";


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  countryList: Country[] = Constant.countryList;
  user: User = {
    name: '',
    email: '',
    gender: '',
    mobile: '',
    country: '',
    description: '',
    accept: ''
  };

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

  // on Check the form invalid while on submit
  public onSubmit(contactForm) {
    if (contactForm.invalid) {
      this.isValidFormSubmitted = false;
    }
    else {
      this.isValidFormSubmitted = true;
    }

    console.log(contactForm.value);
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
