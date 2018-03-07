import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },    // redirect to '/dashboard' in case the URL is exactly '' after domain
  { path: 'dashboard', component: DashboardComponent },         // route to dashboard
  { path: 'detail/:id', component: HeroDetailComponent },       // route to detail view of a specific hero with ID id
  { path: 'heroes', component: HeroesComponent }                // route to the heroes component
];

@NgModule({
  imports: [
    /**
     * method forRoot() configures the router at the application's root level and supplies
     * the service providers and directives needed for routing.
     * furthermore, it performs the initial navigation based on the current browser URL
     */
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
