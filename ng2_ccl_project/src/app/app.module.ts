import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {AgmCoreModule} from "angular2-google-maps/core";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import 'hammerjs';

import { FilterPipe } from './filter.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { MapsComponent } from './maps/maps.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { ListComponent } from './list/list.component';
import { HosterComponent } from './hoster/hoster.component';
import { HostComponent } from './host/host.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import {StorageComponent} from "./storage.component";

import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdIconModule } from '@angular2-material/icon';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdIconModule
];

//firebase init
export const firebaseConfig = {
  apiKey: "AIzaSyCjR8vVve3AumLqQa618LpBkNAhIC8-6v8",
  authDomain: "ang2-912fa.firebaseapp.com",
  databaseURL: "https://ang2-912fa.firebaseio.com",
  storageBucket: "ang2-912fa.appspot.com",
  messagingSenderId: "517909678615"
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ //google-maps api-key
      apiKey:'AIzaSyBlgTXLMGrg5cUsLJQGqsu0ffrGP83Psjg'
    }),
    AngularFireModule.initializeApp(firebaseConfig, {method:AuthMethods.Redirect}),//firebase 연동
    ...MD_MODULES
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MapsComponent,
    HostComponent,
    GuestComponent,
    FilterPipe,
    ListComponent,
    HosterComponent,
    LoginComponent,
    StorageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
