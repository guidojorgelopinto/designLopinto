  import {  Component, OnInit } from '@angular/core';
  import { HeaderService } from '../../../shared/Service/header.service';
  @Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss']
  })
  export class MaintenanceComponent implements OnInit {

    constructor(private headerService: HeaderService) { }


    // Establece el color de la letra del header en este componente.
    ngOnInit(): void {
      this.headerService.setColorLetra('black');
    }

}
