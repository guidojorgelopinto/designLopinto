import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../components/material.module";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './legal/cookie-policy/cookie-policy.component';
import { AcceptCookiesComponent } from './legal/accept-cookies/accept-cookies.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, CookiePolicyComponent, AcceptCookiesComponent],

  imports: [CommonModule, RouterModule, MaterialModule],

  exports: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, CookiePolicyComponent, AcceptCookiesComponent],
})
export class SharedModule { }
