import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title : string;
  list : Object[];

  constructor(private request: LibraryRequestsService) { }

  ngOnInit() {
    this.showBooks();
  }

  showBooks() {
    this.request.getNet("books")
      .subscribe((data: Object) => {
          this.title = data['title'];
          const secondKey = Object.keys(data)[1]; //fetched the key at second index
          this.list = data[secondKey];
      });
    this.list.sort(function(a, b) {
      let textA = a["title"].toUpperCase();
      let textB = b["title"].toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
  }

}