import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  constructor(public router: Router) {

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['pages/login']);
  }
  ngOnInit(): void { }
}
