import { Component, OnInit } from '@angular/core';

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

  constructor(_myService: UsersListService, _orderBy: OrderByPipe) {
    this.myService = _myService;
    this.orderBy = _orderBy;
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

}
