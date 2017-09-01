import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppService } from 'app/app.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
@Component({
  templateUrl: 'states.component.html'
})
export class StatesComponent implements OnInit {
  @ViewChild('myModal') myModal;
  pageSize = 10;
  totalRecord = 50;//we have no api for count all record
  currentPage = 1;
  sortBy = "name";
  orderBy = "ASC";
  stateList = [];
  pages = [];
  selectedStateDetail: object = {};
  //public myModal;
  constructor(public appService: AppService) {

    this.getAllStatesWithPagination();
  }
  getStateDetail(state) {
    this.selectedStateDetail = state;
    this.myModal.show()

  }
  getAllStatesWithPagination() {
    var sort = (this.orderBy == 'ASC' ? '' : '-') + this.sortBy;
    var offset = this.pageSize * (this.currentPage - 1);

    this.appService.getStatesWithPagination(sort, offset, this.pageSize)
      .subscribe((res: any) => {
        if (res) {
          this.stateList = res;
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
  loadData(page) {
    this.currentPage = page;
    this.getAllStatesWithPagination();
  }
  gotoPreviousPage() {
    if (this.currentPage != 1) {
      this.currentPage = this.currentPage - 1;
    } this.getAllStatesWithPagination();

  }
  gotoNextPage() {
    if (this.currentPage <= (Math.floor(this.totalRecord / this.pageSize) - 1)) {
      this.currentPage = this.currentPage + 1;
    }
    this.getAllStatesWithPagination();
  }
  changeOrderBy = function (field) {
    this.sortBy = field;
    if (this.orderBy == 'DESC') {
      this.orderBy = 'ASC';
    }
    else if (this.orderBy == 'ASC') {
      this.orderBy = 'DESC'
    }
    this.getAllStatesWithPagination();
  }

  createRange() {
    var number = Math.floor(this.totalRecord / this.pageSize);
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  ngOnInit(): void {
    // generate random values for mainChart

  }
}
