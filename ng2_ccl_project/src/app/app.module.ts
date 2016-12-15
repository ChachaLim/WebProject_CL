import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {AgmCoreModule} from "angular2-google-maps/core";
import {AngularFireModule, AuthMethods} from "angularfire2";
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
  apiKey: "AIzaSyDAdt-zXuFmCVDqcx2N-vcVOIiijNhj2cA",
  authDomain: "angular2-322c9.firebaseapp.com",
  databaseURL: "https://angular2-322c9.firebaseio.com",
  storageBucket: "angular2-322c9.appspot.com",
  messagingSenderId: "888374240508"
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
