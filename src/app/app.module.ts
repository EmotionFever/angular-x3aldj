import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryRequestsService } from './library-requests.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
    ],
  declarations: [ AppComponent, GenreListComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LibraryRequestsService]
})
export class AppModule { }
