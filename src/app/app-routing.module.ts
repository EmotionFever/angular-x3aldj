import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { GenreCreateComponent } from './genre-create/genre-create.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookInstanceListComponent } from './book-instance-list/book-instance-list.component';
import { BookInstanceDetailComponent } from './book-instance-detail/book-instance-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'genre/create', component: GenreCreateComponent },
  { path: 'genre/:id', component: GenreDetailComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'author/create', component: AuthorCreateComponent },
  { path: 'author/:id', component: AuthorDetailComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'bookinstances', component: BookInstanceListComponent },
  { path: 'bookinstance/:id', component: BookInstanceDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}