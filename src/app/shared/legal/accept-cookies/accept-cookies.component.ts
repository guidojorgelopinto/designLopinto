// accept-cookies.component.ts
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-accept-cookies',
  templateUrl: './accept-cookies.component.html',
  styleUrls: ['./accept-cookies.component.scss']
})
export class AcceptCookiesComponent implements OnInit {
  showBanner = true;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    const cookiesAccepted = this.cookieService.get('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      this.showBanner = false;
    }
  }

  acceptCookies() {
    this.cookieService.set('cookiesAccepted', 'true');

    this.showBanner = false;
  }
}
