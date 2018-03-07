import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // array of Heroes to hold fetched hero data
  heroes: Hero[];

  // get hero data from heroService
  getHeroes(): void {
    // heroService.getHeroes() returns an Observable array of heroes.
    // @TODO: .subscribe() Syntax verstehen   -> https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribe.md
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // short syntax that defines a private heroService property and sets it to the singleton instance of a HeroService
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
}
