import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../components/material.module";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, CookiePolicyComponent],

  imports: [CommonModule, RouterModule, MaterialModule],

  exports: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, CookiePolicyComponent],
})
export class SharedModule { }
