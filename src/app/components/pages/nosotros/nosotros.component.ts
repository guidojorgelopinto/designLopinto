import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
    }

}

