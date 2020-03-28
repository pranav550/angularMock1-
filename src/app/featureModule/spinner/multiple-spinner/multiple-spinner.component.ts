import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-multiple-spinner',
  templateUrl: './multiple-spinner.component.html',
  styleUrls: ['./multiple-spinner.component.css']
})
export class MultipleSpinnerComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }

  showSmall(){
    this.spinner.show("small");
  }

  hideSmall(){
    this.spinner.hide("small");
  }

  showMedium(){
    this.spinner.show("medium");
  }

  hideMedium(){
    this.spinner.hide("medium");
  }

  showLarge(){
    this.spinner.show("large");
  }

  hideLarge(){
    this.spinner.hide("large");
  }

  
  

}
