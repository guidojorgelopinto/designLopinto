  import {  Component, OnInit } from '@angular/core';
  import { HeaderService } from '../../../shared/Service/header.service';
  @Component({
    selector: 'app-creationdesigns',
    templateUrl: './creationdesigns.component.html',
    styleUrls: ['./creationdesigns.component.scss']
  })
  export class CreationdesignsComponent implements OnInit {

    constructor(private headerService: HeaderService) { }


    // Establece el color de la letra del header en este componente.
    ngOnInit(): void {
      this.headerService.setColorLetra('black');
    }

}
