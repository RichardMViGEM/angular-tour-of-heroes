import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // properties
  @Input() hero: Hero;
  isFreelancer: boolean;
  edit: boolean;

  // functions
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * wrapper function to be called from html template; turns one given language into a string to be inserted into the template
   * 
   */
  languageToString(lang: number): string {
    // this.hero.printSomething();

    return this.heroService.languageToString(lang);
    // return lang.toString();
  }

  // generated functions
  constructor(
    private route: ActivatedRoute,      // holds information (parameters) about the route to this instance of HeroDetailComponent (the URL, for example /detail/14)
    private heroService: HeroService,   // used to get heroes from the "remote server"
    private location: Location          // Angular service for interacting with the browser (navigation back & forth)
  ) {
  }

  ngOnInit() {
    this.getHero();
    this.edit = false;
  }

}
