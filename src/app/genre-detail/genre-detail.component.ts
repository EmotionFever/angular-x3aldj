import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  genre : Object;

  secondKey : string;

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showGenres();
  }

  showGenres() {
    this.request.getNet("genres")
      .subscribe((data: Object) => {
          this.title = data['title'];
          this.secondKey = Object.keys(data)[1]; //fetched the key at second index
          this.list = data[this.secondKey];
      });
  }

}