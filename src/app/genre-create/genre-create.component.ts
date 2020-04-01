import { Component, OnInit, Input } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  title : string;

  @Input() name: string;

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

  add(): void {
    this.name = this.name.trim();
    //if (!name) { return; }
    const obj = {name : this.name}; // + "&lastname=";
    this.request.createNet(obj, this.thisUrl)
      .subscribe((data: Object) => {
        this.errors = data["errors"];
      });
    this.name = "";
  }
}