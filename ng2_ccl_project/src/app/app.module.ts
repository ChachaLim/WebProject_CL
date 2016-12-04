import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {HouseService} from "./house.service";
import {AppRoutingModule} from "./app-routing.module";
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule} from "angular2-google-maps/core";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBlgTXLMGrg5cUsLJQGqsu0ffrGP83Psjg'
    })
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
