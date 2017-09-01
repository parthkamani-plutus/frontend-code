import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StatesComponent } from './states.component';
import { MessageComponent } from './message.component'
import { CustomPageRoutingModule } from './custompage-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppAuthGuard } from 'app/app-auth.guard'
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    CustomPageRoutingModule,
    BsDropdownModule,

  ],
  declarations: [StatesComponent, MessageComponent],
  providers: [AppAuthGuard]
})
export class CustomPageModule { }
