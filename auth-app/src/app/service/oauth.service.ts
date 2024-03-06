import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure({
      issuer: 'https://google.com',
      redirectUri: window.location.origin + '/index.html',
      clientId: 'your-client-id',
      scope: 'openid profile email'
    });
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}