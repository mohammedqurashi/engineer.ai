import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {interval} from 'rxjs/internal/observable/interval';
import {startWith, switchMap} from "rxjs/operators";
import {Data} from './models/data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  columnDefs = [
    {headerName: 'Title', field: 'title', sortable: true, filter: true},
    {headerName: 'Author', field: 'author', sortable: true, filter: true},
    {headerName: 'Created At', field: 'created_at', sortable: true, filter: true},
    {headerName: 'Point(s)', field: 'points', sortable: true, filter: true},
    {headerName: 'Url', field: 'url', sortable: true, filter: true}
  ];
  
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
      interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.getDatas())
      )
      .subscribe(res => {
       // debugger;
       // console.log('Data updated');
       // console.log(res);
        this.data = res.hits;
      })
    ;
  }
}