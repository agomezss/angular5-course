import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private _swapiService: SwapiService) { }
  movies: any;

  ngOnInit() {
    this._swapiService.getMovies().subscribe(
      val => {
        this.movies = val;
      }
      , (err: any) => {
        console.log(err);
      });
  }

}
