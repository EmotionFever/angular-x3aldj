import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-book-instance-list',
  templateUrl: './book-instance-list.component.html',
  styleUrls: ['./book-instance-list.component.css']
})
export class BookInstanceListComponent implements OnInit {
  title : string;
  list : Object[];

  constructor(private request: LibraryRequestsService) { }

  ngOnInit() {
    this.showBookInstances();
  }

  showBookInstances() {
    this.request.getNet("bookinstances")
      .subscribe((data: Object) => {
          this.title = data['title'];
          const secondKey = Object.keys(data)[1]; //fetched the key at second index
          this.list = data[secondKey];
      });
  }
}