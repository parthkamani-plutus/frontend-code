import { NgModule } from '@angular/core';
import { AppAuthGuard } from 'app/app-auth.guard';
import { Routes, RouterModule } from '@angular/router';

import { StatesComponent } from './states.component';
import { MessageComponent } from './message.component'

const routes: Routes = [
  {
    path: '',
    component: StatesComponent,
    data: {
      title: 'States'
    },
    canActivate: [AppAuthGuard]
  }, {
    path: 'message',
    component: MessageComponent,
    data: {
      title: "message"
    }, canActivate: [AppAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPageRoutingModule { }
