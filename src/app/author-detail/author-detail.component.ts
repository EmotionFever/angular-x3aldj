import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  title : string;
  genre : Object;
  books : Object[];

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showAuthors();
  }

  showAuthors() {
    const id = this.route.snapshot.paramMap.get('id');
    this.request.getNet("author/" + id)
      .subscribe((data: Object) => {
        this.title = data['title'];
        const secondKey = Object.keys(data)[1];
        this.genre = data[secondKey];
        const thirdKey = Object.keys(data)[2];
        this.books = data[thirdKey];
      });
  }

}