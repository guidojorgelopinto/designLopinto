import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/Home2/home2.component';
import { Home3Component } from './pages/home3/home3.component';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    Home2Component,
    Home3Component,
    NosotrosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
  ],

  imports: [
    CommonModule, RouterModule, SharedModule, MaterialModule
  ],

  exports: [
    HomeComponent,
    Home2Component,
    Home3Component,
    NosotrosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
],
})
export class ComponentsModule {}
