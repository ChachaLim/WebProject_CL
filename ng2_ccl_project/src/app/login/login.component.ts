import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import {Router} from "@angular/router";

@Component({

  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  isAuth = false;
  authColor = 'warn';
  user = {};
  title = "airbnb";

  constructor(
    public af: AngularFire,
    private router: Router
  ) {
    this.af.auth.subscribe(
      user => this._changeState(user),
      error => console.trace(error)
    );
  }

  //홈으로 가기
  onClick():void{
    this.router.navigate(['']);
  }

  //로그인
  login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    });
  }
  //로그아웃
  logout() {
    this.af.auth.logout();
  }

  private _changeState(user: any = null) {
    if(user) {
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
    }
  }

  private _getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private _getProvider(from: string) {
    switch(from){
      case 'google': return AuthProviders.Google;
    }
  }
}
