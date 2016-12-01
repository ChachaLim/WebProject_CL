import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";

const appRoutes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'details/:hoster', component: DetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
