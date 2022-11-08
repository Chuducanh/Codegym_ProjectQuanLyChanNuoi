import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {ShareService} from "../../service/share.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;
  role: String;

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private authService: AuthService) {
    //alert("le phi duy");
    // this.shareService.getClickEvent().subscribe(() => {
    //   this.loadHeader();
    // })
  }

  loadHeader(): void {
    alert(this.tokenStorageService.getToken());
    alert(this.tokenStorageService.getUser());
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0].name;
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    // this.isLoggedIn = this.username != null;
    // this.isLoggedIn = this.username != null;
    alert(this.isLoggedIn);
  }


  ngOnInit(): void {
    this.loadHeader();
  }

  logOut() {
    this.tokenStorageService.logOut();
    // this.authService.isLoggedIn = false;
    this.ngOnInit();
  }


}
