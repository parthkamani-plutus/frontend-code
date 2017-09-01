import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AppAuthGuard implements CanActivate {

    constructor(protected router: Router) {
    }

    canActivate() {
        let userDetails: any = JSON.parse(localStorage.getItem('UserDetails')) || {};
        if (userDetails && userDetails.user) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['pages/login']);
        return false;
    }
}