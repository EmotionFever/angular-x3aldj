import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  title : string;
  genre : Object;

  constructor(
    private request: LibraryRequestsService,
    ) { }

  ngOnInit() {
    this.showAuthors();
  }

  showAuthors() {
    this.request.getNet("genre/create")
      .subscribe((data: Object) => {
        this.title = data['title'];
      });
  }
/*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
*/
}