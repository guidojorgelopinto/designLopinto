import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
    }

}

