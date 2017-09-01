import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppService } from 'app/app.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
@Component({
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit {
  username: string = '';
  public MessageData: any = {};
  messageList = [];
  constructor(public appService: AppService) {
    var userDetails = JSON.parse(localStorage.getItem('UserDetails'));
    if (!userDetails.user) {
      this.username = '';
    }
    else {
      this.username = userDetails.user;
    }
    this.getAllMessages();
  }
  getAllMessages() {
    this.appService.getAllMessage()
      .subscribe((res: any) => {
        if (res) {
          this.messageList = res;
        } else {
        }
      }, error => {
        if (error.status == 401) {
          //alert("Invalid User name or password.");
        }
        console.info('message error', error);
        // localStorage.removeItem("UserDetails");
      });
  }
  AddMessage() {

    this.MessageData.user = this.username;
    this.appService.Message(this.MessageData)
      .subscribe((res: any) => {
        if (res) {
          this.messageList = res;
        } else {
        }
      }, error => {
        if (error.status == 401) {
          //alert("Invalid User name or password.");
        }
        console.info('message error', error);
        // localStorage.removeItem("UserDetails");
      });
  }





  ngOnInit(): void {
    // generate random values for mainChart

  }
}
