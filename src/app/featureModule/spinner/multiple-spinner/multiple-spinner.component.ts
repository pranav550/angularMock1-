import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from '@ngx-translate/core';
import { MockService } from './../../../shared/services/mock.service';
@Component({
  selector: 'app-multiple-spinner',
  templateUrl: './multiple-spinner.component.html',
  styleUrls: ['./multiple-spinner.component.css']
})
export class MultipleSpinnerComponent implements OnInit {
  isSmall: boolean = false;
  isMedium: boolean = false;
  isLarge: boolean = false;


  constructor(
    private spinner: NgxSpinnerService,
    private service: MockService,
    private translate:TranslateService
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



  showSmall(flag) {
    this.isSmall = flag;
    this.spinner.show("small");
  }

  hideSmall(flag) {
    this.isSmall = flag;
    this.spinner.hide("small");
  }

  showMedium(flag) {
    this.isMedium = flag;
    this.spinner.show("medium");
  }

  hideMedium(flag) {
    this.isMedium = flag;
    this.spinner.hide("medium");
  }

  showLarge(flag) {
    this.isLarge = flag;
    this.spinner.show("large");
  }

  hideLarge(flag) {
    this.isLarge = flag;
    this.spinner.hide("large");
  }




}
