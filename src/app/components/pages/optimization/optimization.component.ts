  import {  Component, OnInit } from '@angular/core';
  import { HeaderService } from '../../../shared/Service/header.service';
  @Component({
    selector: 'app-optimization',
    templateUrl: './optimization.component.html',
    styleUrls: ['./optimization.component.scss']
  })
  export class OptimizationComponent implements OnInit {

    constructor(private headerService: HeaderService) { }


    // Establece el color de la letra del header en este componente.
    ngOnInit(): void {
      this.headerService.setColorLetra('black');
    }

}
