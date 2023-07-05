import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ServicesComponent } from "./components/pages/services/services.component";
import { ProjectsComponent } from "./components/pages/projects/projects.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { CreationdesignsComponent } from "./components/pages/creationdesigns/creationdesigns.component";
import { MaintenanceComponent } from "./components/pages/maintenance/maintenance.component";
import { OptimizationComponent } from "./components/pages/optimization/optimization.component";
import { PrivacyPolicyComponent } from './shared/legal/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './shared/legal/cookie-policy/cookie-policy.component';
import { AcceptCookiesComponent } from './shared/legal/accept-cookies/accept-cookies.component';
import { PerformanceComponent } from './components/pages/performance/performance.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "services", component: ServicesComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "contact", component: ContactComponent },
    { path: "creationdesigns", component: CreationdesignsComponent },
    { path: "maintenance", component: MaintenanceComponent },
    { path: "optimization", component: OptimizationComponent },
    { path: "privacy-policy", component: PrivacyPolicyComponent },
    { path: "cookie-policy", component: CookiePolicyComponent },
    { path: "accept-cookies", component: AcceptCookiesComponent },
    { path: "performance", component: PerformanceComponent},

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
