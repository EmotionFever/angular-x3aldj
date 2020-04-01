import { Component, OnInit } from '@angular/core';
import { LibraryRequestsService } from '../library-requests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title;
  error;
  data;

  constructor(private request: LibraryRequestsService) { }

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.request.getNet("")
      .subscribe((data: Object) => {
        this.title = data['title'];
        const secondKey = Object.keys(data)[1]; //fetched the key at second index
        this.error = data[secondKey];
        const thirdKey = Object.keys(data)[2]; //fetched the key at second index
        this.data = data[thirdKey];
      });
  }

}