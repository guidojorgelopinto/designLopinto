import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { Home3Component } from './pages/home3/home3.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreationdesignsComponent } from './pages/creationdesigns/creationdesigns.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { OptimizationComponent } from './pages/optimization/optimization.component';
import { PerformanceComponent } from "./pages/performance/performance.component";
import { About1Component } from "./pages/about1/about1.component";




@NgModule({
  declarations: [
    HomeComponent,
    Home2Component,
    Home3Component,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    CreationdesignsComponent,
    ContactComponent,
    MaintenanceComponent,
    OptimizationComponent,
    PerformanceComponent,
    About1Component

  ],

  imports: [
    CommonModule, RouterModule, SharedModule, MaterialModule
  ],

  exports: [
    HomeComponent,
    Home2Component,
    Home3Component,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    CreationdesignsComponent,
    ContactComponent,
    MaintenanceComponent,
    OptimizationComponent,
    PerformanceComponent,
    About1Component
],
})
export class ComponentsModule { }
