import { Component, OnInit } from '@angular/core';

import { UsersListService } from './users-list.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users; // = []; ?
  myService: UsersListService;

  constructor(_myService: UsersListService) {
    this.myService = _myService;
  }

  remove(){
    console.log('removendo');
  }

  ngOnInit(){
    this.myService.getUsers()
     .subscribe(
       data => this.users = data.json(),
       error => console.error("=> Erro = "+error),
       () => console.log('=> Finished')
     );
  }

}
