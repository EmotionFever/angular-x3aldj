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

  secondKey;
  id = "myId";

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showGenres();
  }

  showGenres() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.request.getNet("genre/" + this.id)
      .subscribe((data: Object) => {
        this.title = data['title'];
        this.secondKey = Object.keys(data)[1]; //fetched the key at second index
        this.genre = data[this.secondKey];
      });
  }

}