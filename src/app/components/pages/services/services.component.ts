import {  Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
    }

    // Texto de las cards
    cards = [
      {
      title1: 'Creamos tu',
      title2: 'Apps & Sitios Webs',
      text1: 'tenemos ganas, hacemos',
      text2: 'lo que nos apasiona.',
      image1: '../../../../assets/Logo sin fondo.png',
      link: '/home',
      backgroundColor: '#0076c2'
      },
      {
      title1: 'Diseño rapido,',
      title2: 'Basico y Economico',
      text1: 'wordpress tambien es',
      text2: 'una buena opcion',
      image1: '../../../../assets/time_square.png',
      link: '/creationdesigns',
      backgroundColor: '#A413B5'
      },
      {
      title1: 'Mantenimiento',
      title2: 'y Modificaciones',
      text1: 'te brindamos atencion',
      text2: 'y soporte.',
      image1: '../../../../assets/engranaje.png',
      link: '/maintenance',
      backgroundColor: '#28C76F'
      },
      {
      title1: 'Optimizamos y',
      title2: 'Potenciamos',
      text1: 'basta de lentitud',
      text2: 'y desactualizaciones.',
      image1: '../../../../assets/llave ingl.png',
      link: '/optimization',
      backgroundColor: '#EE7F48'
    },
    ];
  }
