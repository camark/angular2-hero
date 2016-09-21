import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { StudentComponent }   from './app.student';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import './rxjs-extensions';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    StudentComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ 
    AppComponent
  ]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/