import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  title : string;
  book : Object;
  book_instances : Object[] = [];

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showBooks();
  }

  showBooks() {
    const id = this.route.snapshot.paramMap.get('id');
    this.request.getNet("book/" + id)
      .subscribe((data: Object) => {
        this.title = data['title'];
        const secondKey = Object.keys(data)[1];
        this.book = data[secondKey];
        const thirdKey = Object.keys(data)[2];
        this.book_instances = data[thirdKey];
      });
  }

}