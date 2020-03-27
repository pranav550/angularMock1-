import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  urls:any = []
  message: string
  constructor() { }

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
        if (event.target.files[i]) {
          console.log(event.target.files[i])
          if (event.target.files[i].type == "application/pdf") {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[i])
            reader.onload = (event: any) => {
              console.log(event)
              if (event.loaded < 5000000) {
                this.urls.push(event.target.result)
                this.message = "File Uploaded Successfully"
              }
              else {
                this.message = "File Size Excceded"
              }

            }
          }
          else {
            this.message = "Files Types is not match"
          }
        }
      }
    }
  }

  public onSubmit(contactForm) {
    if (contactForm.invalid) {
    this.isValidFormSubmitted = false;
    //  console.log(this.isValidFormSubmitted)
      //	return;	
    }
    else {
     this.isValidFormSubmitted = true;
    //  console.log(this.isValidFormSubmitted)
    }

    console.log(contactForm.value);
  }

}

