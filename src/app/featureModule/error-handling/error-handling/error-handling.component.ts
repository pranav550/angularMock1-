import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  records:any=[]
  error:string
  constructor(private service:MockService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getRecords()
  }

// call get data function
  public getRecords():void{
    this.spinner.show();
    this.service.getData().subscribe((data)=>{
      this.spinner.hide();
      this.records = data.results
    }, (error)=>{
     // this.error=error
    })
  }

}
