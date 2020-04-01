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

  errors : Object[];

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

  deleteGenre() {
    const id = this.route.snapshot.paramMap.get('id');
    const obj = {id : id};
    this.request.createNet(obj, "book/" + id + "/delete")
      .subscribe((data: Object) => {
        this.errors = data["errors"];
        const books = data["book_instances"];
        if(books.lenth != 0) {
                    this.errors = [];
          this.errors.push({msg : "Delete book instances first!"});
        }
        if(!this.errors) {
          this.errors = [];
          this.errors.push({msg : "Deleted with sucess! :-)"});
        }
      });
  }

}