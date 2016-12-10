import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {HouseService} from "./house.service";
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule} from "angular2-google-maps/core";
import { FilterComponent } from './filter/filter.component';
import { HostComponent } from './host/host.component';
import { GuestComponent } from './guest/guest.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FilterPipe } from './filter.pipe';
import {DataService} from "./data.service";
import {AfApp} from "./af.component";
import {AngularFireModule} from "angularfire2";
import { ListComponent } from './list/list.component';

//firebase init
export const firebaseConfig = {
  apiKey: "AIzaSyCjR8vVve3AumLqQa618LpBkNAhIC8-6v8",
  authDomain: "ang2-912fa.firebaseapp.com",
  databaseURL: "https://ang2-912fa.firebaseio.com",
  storageBucket: "ang2-912fa.appspot.com",
  messagingSenderId: "517909678615"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MapsComponent,
    FilterComponent,
    HostComponent,
    GuestComponent,
    FilterPipe,
    AfApp,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBlgTXLMGrg5cUsLJQGqsu0ffrGP83Psjg'
    }),
    AngularFireModule.initializeApp(firebaseConfig),//firebase 연동
    MaterialModule.forRoot()
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
