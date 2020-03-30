import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-async-call-child',
  templateUrl: './async-call-child.component.html',
  styleUrls: ['./async-call-child.component.css']
})
export class AsyncCallChildComponent implements OnInit, OnChanges {
  @Input() users$:any
  constructor(private spinner: NgxSpinnerService) { }
  

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    
  }

  ngOnChanges(changes: SimpleChanges){
   if(changes.users$.currentValue){
    this.spinner.hide();
   }

   
  }

}
