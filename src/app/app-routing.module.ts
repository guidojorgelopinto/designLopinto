import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/pages/home/home.component";
import { NosotrosComponent } from "./components/pages/nosotros/nosotros.component";
import { ServiciosComponent } from "./components/pages/servicios/servicios.component";
import { ProyectosComponent } from "./components/pages/proyectos/proyectos.component";
import { ContactoComponent } from "./components/pages/contacto/contacto.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "proyectos", component: ProyectosComponent },
    { path: "contacto", component: ContactoComponent },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
