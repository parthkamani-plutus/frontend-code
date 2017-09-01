import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {
  userDetails: any;
  constructor() {
    this.userDetails = JSON.parse(localStorage.getItem('UserDetails'));
    if (!this.userDetails.user) {
      this.userDetails.user = "Admin";
    }
  }
  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  //
  // public toggled(open: boolean): void {
  //   console.log('Dropdown is now: ', open);
  // }
  //
  // public toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }

  ngOnInit(): void { }
}
