import { MockService } from './../../../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-async-call',
  templateUrl: './async-call.component.html',
  styleUrls: ['./async-call.component.css']
})
export class AsyncCallComponent implements OnInit {
  users$:Observable<any[]>
  
  constructor(private mock:MockService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getUser()
  }
// function to call get User
  public getUser():void{
    this.spinner.show();
    this.users$ = this.mock.getData()
  
  }
}
