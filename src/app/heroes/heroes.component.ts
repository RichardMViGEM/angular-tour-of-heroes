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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    // when addHero() saves successfully, the subscribe callback receives the new hero and pushes it into heroes[]
    this.heroService.addHero( { name } as Hero).subscribe(hero => {this.heroes.push(hero)});
  }

  delete(hero: Hero): void {
    // update the array of heroes; the actual task of removing the db-entry is delegated to HeroService though
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

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
