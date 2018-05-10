import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  name:string;
  email:string;
  message:string;
  errors:boolean = false;
  errorlist:string[];
  sending:boolean = false;
  filename:string;

  constructor(private es:EnquiryService) { 

  }

  ngOnInit() {
  }

  sendEnquiry() {
    var regex = /^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{3,5}$/;
    this.errorlist=[];
    this.errors = false;
    this.sending = false;

    if (this.name == undefined || this.name.length == 0) {
        this.errorlist.push("Name must be filled");
    }

    if (this.email == undefined || this.email.length == 0) {
        this.errorlist.push("Email must be filled");
    }

    else if (!regex.test(this.email)) {
        this.errorlist.push("Invalid Email Format");
    }

    if (this.message == undefined || this.message.length == 0) {
      this.errorlist.push("Message must be filled");
    }

    if (this.errorlist.length > 0) {
      this.errors = true;
    } else {
      this.sending = true;
      this.filename = "loading.gif"
      
      let temp = {
        name:this.name,
        email:this.email,
        message:this.message
      };

      this.es.sendEnquiry(temp).subscribe(
        (data)=> {
          this.filename = "messagesent.png";
          setTimeout(()=> {
            this.sending = false;
            this.name = "";
            this.email = "";
            this.message = "";

          }, 2000);
        },
      (error)=> {
        alert("Message not sent");
        setTimeout(()=> {
          this.sending = false;
          this.name = "";
          this.email = "";
          this.message = "";

        }, 2000);
      })
    }
  }
}


