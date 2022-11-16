import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {TokenStorageService} from '../token-storage.service';
import {ShareService} from '../share.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private auth: AuthService,
              private router: Router,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    // const token = sessionStorage.getItem('auth-token');
    // alert(token);
    // // decode the token to get its payload
    // const tokenPayload = jwt_decode(token);
    // alert(tokenPayload);
    const role = this.tokenStorageService.getUser().roles[0].name;
    if (!this.auth.isAuthenticated() || role !== expectedRole) {
      this.tokenStorageService.logOut();
      this.shareService.sendClickEvent();
      this.router.navigateByUrl('/authen/login');
      return false;
    }
    return true;
  }
}
