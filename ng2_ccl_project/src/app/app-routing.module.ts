import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {HostComponent} from "./host/host.component";
import {GuestComponent} from "./guest/guest.component";
import {HostControllComponent} from "./host-controll/host-controll.component";

const appRoutes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'details/:hoster', component: DetailsComponent},
  {path: 'host', component: HostComponent},
  {path: 'guest', component: GuestComponent},
  {path: 'hostControll', component: HostControllComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
