import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryRequestsService } from './library-requests.service';
import { GenreCreateComponent } from './genre-create/genre-create.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookInstanceListComponent } from './book-instance-list/book-instance-list.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
    ],
  declarations: [ AppComponent, GenreListComponent, DashboardComponent, GenreCreateComponent, GenreDetailComponent, AuthorListComponent, AuthorDetailComponent, BookListComponent, BookDetailComponent, BookInstanceListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LibraryRequestsService]
})
export class AppModule { }
