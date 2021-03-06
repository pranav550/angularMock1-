import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }

  showSuccess(message, title){
      this.toastr.success(message, title, {
        timeOut: 3000,
        positionClass:'toast-top-right'
      })
  } 

  failFileType(message, title){
    this.toastr.error(message, title, {
      timeOut: 3000,
      positionClass:'toast-top-right'
    })
} 

failFileSize(message, title){
  this.toastr.error(message, title, {
    timeOut: 3000,
    positionClass:'toast-top-right'
  })
} 
}