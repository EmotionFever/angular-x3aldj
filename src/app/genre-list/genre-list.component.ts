import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';


@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  title : string;
  list : Object[];

  constructor(private request: LibraryRequestsService) { }

  ngOnInit() {
    this.showGenres();
  }

  showGenres() {
    this.request.getNet("genres")
      .subscribe((data: Object) => {
          this.title = data['title'];
          const secondKey = Object.keys(data)[1]; //fetched the key at second index
          this.list = data[secondKey];
      });
  }
}