import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-multiple-spinner',
  templateUrl: './multiple-spinner.component.html',
  styleUrls: ['./multiple-spinner.component.css']
})
export class MultipleSpinnerComponent implements OnInit {
  isSmall: boolean = false;
  isMedium: boolean = false;
  isLarge: boolean = false;


  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

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
