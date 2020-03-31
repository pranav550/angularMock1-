import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { File } from './../../../shared/models/file';
import { NotificationService } from './../../../shared/services/notification.service';
import {Constant} from "./../../../shared/constant";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  isValidFormSubmitted: boolean = true;
  urls:File[]=[];
  message: string;
  constructor(private toastr: ToastrService, private notifyService : NotificationService) { }

  user = {
    upload: '',
  };

  ngOnInit(): void {
  }

  // on Change FileUpload Function & validating the file type and file size
  public onSelectFile(event):any {
    console.log(event.target.files)
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        let fileType=event.target.files[i]
        if (fileType) {
          if (fileType.type == Constant.FilePDF) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[i])
            reader.onload = (event: any) => {
              console.log(event)
              if (event.loaded < 5000000) {
                this.urls.push(event.target.result);
                console.log(this.urls)
                }
              else {
               this.failFileSize();
                }

            }
          }
          else {
            this.failFileType();
          }
        }
      }
    }
  }

  showSuccess() {
    this.notifyService.showSuccess("File Uploaded Successfully !!", "Notification", );
  }

  failFileType() {
    this.notifyService.failFileType("File Type Not Match !!", "Notification", );
  }

  failFileSize() {
    this.notifyService.failFileSize("File Size Exceeded !!", "Notification", );
  }

  public onSubmit(contactForm) {
    if (contactForm.invalid) {
    this.isValidFormSubmitted = false;
    //	return;	
    }
    else {
      this.showSuccess()
     this.isValidFormSubmitted = true;
    }

    console.log(contactForm.value);
  }

}

