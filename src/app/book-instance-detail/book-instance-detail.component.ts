import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-book-instance-detail',
  templateUrl: './book-instance-detail.component.html',
  styleUrls: ['./book-instance-detail.component.css']
})
export class BookInstanceDetailComponent implements OnInit {
  title : string;
  bookinstance : Object;

  errors : Object[];

  constructor(
    private request: LibraryRequestsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.showBookInstances();
  }

  showBookInstances() {
    const id = this.route.snapshot.paramMap.get('id');
    this.request.getNet("bookinstance/" + id)
      .subscribe((data: Object) => {
        this.title = data['title'];
        const secondKey = Object.keys(data)[1];
        this.bookinstance = data[secondKey];
      });
  }

  deleteGenre() {
    const id = this.route.snapshot.paramMap.get('id');
    const obj = {id : id};
    this.request.createNet(obj, "bookinstance/" + id + "/delete")
      .subscribe((data: Object) => {
        this.errors = data["errors"];
        if(!this.errors) {
          this.errors = [];
          this.errors.push({msg : "Deleted with sucess! :-)"});
        }
      });
  }

}