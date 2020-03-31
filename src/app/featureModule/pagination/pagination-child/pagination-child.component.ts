import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }


}
