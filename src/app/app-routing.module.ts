import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { GenreCreateComponent } from './genre-create/genre-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'genre/:id', component: GenreDetailComponent },
  { path: 'genre/create', component: GenreCreateComponent },
  /*
  { path: 'pets', component: PetsComponent },
  { path: 'heroes', component: HeroesComponent }
  */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}