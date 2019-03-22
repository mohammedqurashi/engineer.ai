import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlgoliaResponse} from "../models/api-response.model";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getDatas(): Observable<AlgoliaResponse> {
    return this.http.get<AlgoliaResponse>('https://hn.algolia.com/api/v1/search_by_date?tags=story')
      .pipe(
        map(res => new AlgoliaResponse().deserialize(res))
      );
  }
}