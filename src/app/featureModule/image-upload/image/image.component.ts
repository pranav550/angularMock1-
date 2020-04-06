import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './../../../shared/services/notification.service';
import { Constant } from '../../../shared/constant';
import { File } from './../../../shared/models/file';
import { MockService } from './../../../shared/services/mock.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  isValidFormSubmitted: boolean = true;
  urls: File[];
  message: string;

  constructor(
    private toastr: ToastrService,
    private notifyService: NotificationService,
    private service: MockService,
    private translate:TranslateService
    ) { }

  user = {
    upload: '',
  };

  ngOnInit(): void {
    this.changeLanguage()
  }

    //function for language change
    changeLanguage(){
      this.service.getLang.subscribe(resp=>{
      this.translate.addLangs(['en', 'hn']);
        if (localStorage.getItem('locale')) {
          const browserLang = localStorage.getItem('locale');
          this.translate.use(browserLang.match(/en|hn/) ? browserLang : 'en');
        } else {
          localStorage.setItem('locale', 'en');
          this.translate.setDefaultLang('en');
        }
      })
    }

  // on Change FileUpload Function & validating the file type and file size
  public onSelectFile(event): any {
    this.urls = [];
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i]) {
          let fileType = event.target.files[i].type;
          if (fileType == Constant.imageJPEG || fileType == Constant.imagePNG || fileType == Constant.imageJPG) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[i]);
            reader.onload = (event: any) => {
              //  console.log(event)
              if (event.loaded < 3000000) {
                this.urls.push(event.target.result);
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
    this.notifyService.showSuccess("File Uploaded Successfully !!", "Notification");
  }

  failFileType() {
    this.notifyService.failFileType("File Type Not Match !!", "Notification");
  }

  failFileSize() {
    this.notifyService.failFileSize("File Size Exceeded !!", "Notification");
  }
  // function for submit the file
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
