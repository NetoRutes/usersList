import { Component, OnInit, EventEmitter } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';

import { UsersListService } from './users-list.service';
import { OrderByPipe } from './../order-by.pipe';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users;
  myService: UsersListService;
  orderBy: OrderByPipe;
  modalActions: EventEmitter<string|MaterializeAction>;
  currentUserName: string = '';

  constructor(_myService: UsersListService, _orderBy: OrderByPipe) {
    this.myService = _myService;
    this.orderBy = _orderBy;
    this.modalActions = new EventEmitter<string|MaterializeAction>();
  }

  ngOnInit(){
    this.myService.getUsers()
     .subscribe(
       data => this.users = data.json(),
       error => console.error("=> Erro = "+error),
       () => console.log('=> Finished')
     );
  }

  order(fieldToOrder){
    this.users = this.orderBy.transform(this.users, fieldToOrder);
  }

  openDeleteModal(currentUserNameToDelete) {
    this.currentUserName = currentUserNameToDelete;
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeDeleteModal() {
    this.currentUserName = '';
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
