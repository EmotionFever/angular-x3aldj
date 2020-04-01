import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  title : string;
  list : Object[];

  constructor(private request: LibraryRequestsService) { }

  ngOnInit() {
    this.showGenres();
  }

  showGenres() {
    this.request.getNet("authors")
      .subscribe((data: Object) => {
          this.title = data['title'];
          const secondKey = Object.keys(data)[1]; //fetched the key at second index
          this.list = data[secondKey];
      });
  }

}