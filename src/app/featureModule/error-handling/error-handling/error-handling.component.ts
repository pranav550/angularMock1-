import { Data } from './../../../shared/models/data';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MockService } from './../../../shared/services/mock.service';
@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  records: Data[];
  error: string;
  constructor(private service: MockService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getRecords()
  }

  // call get data function
  public getRecords(): void {
    this.spinner.show();
    this.service.getData().subscribe((data) => {
      this.spinner.hide();
      this.records = data.results;
    }, (error) => {
      // this.error=error
    })
  }

}
