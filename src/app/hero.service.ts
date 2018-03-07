import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  // properties

  private heroesUrl = 'api/heroes';

  // functions

  // GET heroes from the "server"
  getHeroes(): Observable<Hero[]> {
    // http.get returns the body of the respons as untyped JSON object by default
    // the optional type specifier <Hero[]> results in a typed result object
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  
  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private log (message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  public getMessageService(): MessageService {
    return this.messageService;
  }

}
