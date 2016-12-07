import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import {AgmCoreModule} from "angular2-google-maps/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {HouseService} from "./house.service";
import { MapsComponent } from './maps/maps.component';
import {DataService} from "./data.service";
import {AfApp} from "./af.component";
import {AngularFireModule} from "angularfire2";

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
    AfApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBlgTXLMGrg5cUsLJQGqsu0ffrGP83Psjg'
    }),
    AngularFireModule.initializeApp(firebaseConfig)//firebase 연동
  ],
  providers: [HouseService],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
