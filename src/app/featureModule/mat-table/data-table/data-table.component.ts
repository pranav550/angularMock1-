import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MockService } from './../../../shared/services/mock.service';
import { UserTable } from './../../../shared/models/usertable';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  isLoading:boolean=true;
  displayedColumns: string[] = ['id','first_name', 'last_name', 'gender', 'dob', 'email', 'phone', 'website'];
  dataSource: MatTableDataSource<UserTable>;
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:MockService){

  }

  ngOnInit(){
this.getList()

  }

  getList(){
    this.isLoading=true
      this.service.getUsers().subscribe(data=>{
        this.isLoading=false
        this.dataSource = new MatTableDataSource(data['result'])
     // this.dataSource =data.results
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      })
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 


}
