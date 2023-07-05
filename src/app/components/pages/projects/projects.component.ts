import {  Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
    }

    cards = [
      {
        image: 'assets/interior-restaurante.jpg',
        title: 'Proyecto 1',
        description: 'Descripción del Proyecto 1',
        link: '/home'
      },
      {
        image: 'assets/interior-restaurante.jpg',
        title: 'Proyecto 2',
        description: 'Descripción del Proyecto 2',
        link: '#'
      },
      {
        image: 'assets/interior-restaurante.jpg',
        title: 'Proyecto 3',
        description: 'Descripción del Proyecto 3',
        link: '#'
      }
    ];





  }
