import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListService } from './users-list/users-list.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [UsersListService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
