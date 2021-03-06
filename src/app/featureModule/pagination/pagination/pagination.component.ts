import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Data } from './../../../shared/models/data';
import { MockService } from './../../../shared/services/mock.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  records: Data[];
  totalRecords: number;
  page: number = 1;
  constructor(private mockService: MockService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getRecords();
  }

  // get all data records
  public getRecords(): void {
    this.spinner.show();
    this.mockService.getData().subscribe(data => {
      this.spinner.hide();
      this.records = data.results;
      this.totalRecords = data.results.length;
    })
  }
}
