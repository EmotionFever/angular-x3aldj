import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  title : string;
  genre : Object;
  errors : Object[];

  thisUrl : string = "genre/create";

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

  add(name: string): void {
    name = name.trim();
    //if (!name) { return; }
    const obj = {name : name}; // + "&lastname=";
    this.request.createNet(obj, this.thisUrl)
      .subscribe((data: Object) => {
        this.errors = data["errors"];
      });
  }
}