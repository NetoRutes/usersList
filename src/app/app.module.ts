import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListService } from './users-list/service/users-list.service';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    OrderByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [UsersListService, OrderByPipe, FilterByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
