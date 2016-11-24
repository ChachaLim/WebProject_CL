import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = "airbnb";

 houses = [
 	{
	 	hoster:'차영훈',
		price:'250$',
		place:'Busan'
	},
	{
		hoster:'임종식',
		price:'299$',
		place:'부산'
	},
	{
		hoster:'Chris',
		price:'300$',
		place:'NY'
	},
	{
		hoster:'elice',
		price:'500$',
		place:'paris'
	}

 ];

 constructor(){}

}
