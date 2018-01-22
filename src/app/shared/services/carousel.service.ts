// import { Carousel } from './../../shared/services/carousel';
import { Globals } from './../../globals';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { catchError, tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
// import { filter } from 'rxjs/operators/filter';
import { of } from 'rxjs/observable/of';

// import { Carousel } from './../models/carousel';
import { MessageService } from '../services/message.service';
import { Carousel } from '../models/carousel';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CarouselService {
  // private carouselUrl = 'http://jsonplaceholder.typicode.com/users';  // URL to web api
  private carouselUrl = ''; //'carousel';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _globals: Globals
  ) {
    this.carouselUrl = _globals.API_ENDPOINT + 'carousels';
  }

  /** GET carousel from the server */
  getCarousel(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.carouselUrl)
      .pipe(
      tap(carousel => this.messageService.logInfo(`fetched carousel`)),
      catchError(this.messageService.logError('getCarousel', []))
      );
  }

  addCarousel(carousel: Carousel) {
    return this.http.post<Carousel>(this.carouselUrl, carousel, httpOptions);
  }

  updateCarousel(carousel: Carousel) {
    return this.http.put<Carousel>(this.carouselUrl + "/" + carousel._id, carousel, httpOptions);
  }

  deleteCarousel(_id: string) {
    return this.http.delete<any>(this.carouselUrl + "/" + _id, httpOptions);
  }
  /** GET carousel from the server */
  // searchHeroes(term: string): Observable<Carousel[]> {
  //   if (!term.trim()) { return of([]); }
  //   const url = `${this.carouselUrl}/find/${term}`;
  //   return this.http.get<Carousel[]>(url).pipe(
  //     //map(carousel => carousel.filter(hero => hero.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)),
  //     tap(_ => this.messageService.logInfo(`found carousel matching "${term}"`)),
  //     catchError(this.messageService.logError<Carousel[]>('searchHeroes', []))
  //   )
  // }

  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Carousel> {
  //   const url = `${this.carouselUrl}/${id}`;
  //   return this.http.get<Carousel>(url).pipe(
  //     tap(_ => this.messageService.logInfo(`fetched hero id=${id}`)),
  //     catchError(this.messageService.logError<Carousel>(`getHero id=${id}`))
  //   );
  // }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Carousel> {
  //   const url = `${this.carouselUrl}/?id=${id}`;
  //   return this.http.get<Carousel[]>(url)
  //     .pipe(
  //     map(carousel => carousel[0]), // returns a {0|1} element array
  //     tap(h => {
  //       const outcome = h ? `fetched` : `did not find`;
  //       this.messageService.logInfo(`${outcome} hero id=${id}`);
  //     }),
  //     catchError(this.messageService.logError<Carousel>(`getHero id=${id}`))
  //     );
  // }

}
