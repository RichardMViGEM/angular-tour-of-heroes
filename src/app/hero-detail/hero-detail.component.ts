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

  // functions
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
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
  }

}
