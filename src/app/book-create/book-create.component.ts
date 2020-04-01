import { Component, OnInit, Input } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  title : string;

  authors: Object[]

  @Input() titleF: string;
  @Input() author: Object;
  @Input() summary: string;
  @Input() isbn: string;
  @Input() genres: Object[];

  errors : Object[];

  thisUrl : string = "author/create";

  constructor(
    private request: LibraryRequestsService,
    ) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.request.getNet(this.thisUrl)
      .subscribe((data: Object) => {
        this.title = data['title'];
      });
  }

  add(): void {
    const obj = {
      title : this.titleF,
      author : this.author,
      summary : this.summary,
      isbn : this.isbn,
      genres : this.genres
      };
    this.request.createNet(obj, this.thisUrl)
      .subscribe((data: Object) => {
        this.errors = data["errors"];
      });
  }
}