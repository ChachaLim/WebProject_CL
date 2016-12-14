import {Component, OnInit} from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: 'storage',
  template:`
    <img [src]="image"/>
  `
})
export class StorageComponent implements OnInit {
  image: string;
  ngOnInit(){
  }
  constructor(){
    const storageRef = firebase.storage().ref().child('path/image.png');
    storageRef.getDownloadURL().then(url=>this.image = url);
  }
}
