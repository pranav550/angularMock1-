import { NotificationService } from './../../../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  urls:any = []
  message: string
  constructor(private toastr: ToastrService, private notifyService : NotificationService) { }

  user = {
    upload: '',
  };

  ngOnInit(): void {
  }

  // on Change FileUpload Function & validating the file type and file size
  public onSelectFile(event):any {
    this.urls=[]
    //console.log(event.target.files)
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i]) {
        //  console.log(event.target.files[i])
          if (event.target.files[i].type == "image/jpeg" || event.target.files[i].type == "image/png" || event.target.files[i].type == "image/jpg") {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[i])
            reader.onload = (event: any) => {
            //  console.log(event)
              if (event.loaded < 3000000) {
                this.urls.push(event.target.result)
              //  this.message = "File Uploaded Successfully"
              }
              else {
                //this.message = "File Size Excceded"
                this.failFileSize()
              }

            }
          }
          else {
           // this.message = "Files Types is not match"
           this.failFileType()
          }
        }
      }
    }
  }

  showSuccess() {
    this.notifyService.showSuccess("File Uploaded Successfully !!", "Notification", )
  }

  failFileType() {
    this.notifyService.failFileType("File Type Not Match !!", "Notification", )
  }

  failFileSize() {
    this.notifyService.failFileSize("File Size Exceeded !!", "Notification", )
  }

  public onSubmit(contactForm) {
    if (contactForm.invalid) {
    this.isValidFormSubmitted = false;
    //  console.log(this.isValidFormSubmitted)
      //	return;	
    }
    else {
      this.showSuccess()
     this.isValidFormSubmitted = true;
    //  console.log(this.isValidFormSubmitted)
    }

    console.log(contactForm.value);
  }

}
