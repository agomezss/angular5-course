import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class SwapiService {

  constructor(private _http: Http) { }

  getMovies(): any
  {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this._http
    .get('https://swapi.co/api/films/')
    .map((response: any) => response.json().results, { headers: headers })
    .catch(this.handleMessage);
  }

  public handleMessage(error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }

}
