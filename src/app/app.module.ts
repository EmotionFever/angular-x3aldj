import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule, 
    ],
  declarations: [ AppComponent, GenreListComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
