import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppService } from 'app/app.service';
import { Router, CanActivate } from '@angular/router';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public UserData: any = {};
  constructor(public appService: AppService, protected router: Router) {
    localStorage.clear();
  }

  submitLogin() {
    this.appService.login(this.UserData)
      .subscribe((res: any) => {
        if (res) {
          localStorage.setItem('UserDetails', JSON.stringify(this.UserData));
          this.router.navigate(['/custom']);

        } else {
          localStorage.removeItem("UserDetails");
        }
      }, error => {
        if (error.status == 401) {
          alert("Invalid User name or password.");
        }
        console.info('login error', error);
        localStorage.removeItem("UserDetails");
      });
  }

}
