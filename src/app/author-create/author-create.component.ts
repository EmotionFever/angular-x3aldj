import { Component, OnInit, Input } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  title : string;

  @Input() first_name: string;
  @Input() family_name: string;
  @Input() date_of_birth: Date;
  @Input() date_of_death: Date;

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
      first_name : this.first_name,
      family_name : this.family_name,
      date_of_birth : this.date_of_birth,
      date_of_death : this.date_of_death
      };
    this.request.createNet(obj, this.thisUrl)
      .subscribe((data: Object) => {
        this.errors = data["errors"];
      });
  }
}