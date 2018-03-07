import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

// defining const httpOptions
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  // properties

    private heroesUrl = 'api/heroes';

  // functions

  // GET heroes from the "server"
  getHeroes(): Observable<Hero[]> {
    // http.get returns the body of the respons as untyped JSON object by default
    // - Pipe allows for functional operators to be applied right after one another before the return statement ends
    // before, they could only be applied to an object returned by http.get, before anything could be returned
    // - The optional type specifier <Hero[]> results in a typed result object
    // - Tap looks at the observable values and passes them along

    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }
  // GET a single hero from the "server"
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;f

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id =${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // POST (add) new hero
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  // PUT (save) changes to an updated hero
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id =${hero.id}`)),
      catchError(this.handleError<any>('updatedHero'))
    );
  }

  private log (message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  public getMessageService(): MessageService {
    return this.messageService;
  }

  /**
   * Handle Http operations that failed
   * Let the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the Observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // @TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // @TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }
}
