import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreListComponent } from './genre-list/genre-list.component';
/*
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { PetsComponent }      from './pets/pets.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
*/
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'genres', component: GenreListComponent },
  /*
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'heroes', component: HeroesComponent }
  */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}