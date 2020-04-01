import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  title = "MyTitle";
  genre : Object;
  books : Object[];

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showGenres();
  }

  showGenres() {
    const id = this.route.snapshot.paramMap.get('id');
    this.request.getNet("genre/" + id)
      .subscribe((data: Object) => {
        this.title = data['title'];
        const secondKey = Object.keys(data)[1]; //fetched the key at second index
        this.genre = data[secondKey];
        const thirdKey = Object.keys(data)[2]; //fetched the key at second index
        this.books = data[thirdKey];
      });
  }

}