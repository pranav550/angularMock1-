import { UserTable } from './../models/usertable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Constant} from "../constant";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(Constant.url)
      .pipe(catchError(this.handleError))
  }

  lang= new BehaviorSubject("");
  getLang=this.lang.asObservable();


  getUsers():Observable<UserTable> {
    return this.http.get<UserTable>(Constant.maturl)
    .pipe(catchError(this.handleError))
  }
  
  handleError(error) {
    return throwError(error.message)
  }
}
