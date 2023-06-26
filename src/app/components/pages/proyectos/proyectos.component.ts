import {  Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
    }

    // Texto de las cards
    cards = [
      {
        title: 'Diseño Web Personalizado',
        text1: 'Marca la diferencia',
        text2: 'Ofrece la mejor experiencia tus clientes',
        image1: 'random-image1.jpg',
        link: '/',
        backgroundColor: 'linear-gradient(55deg, rgb(36, 59, 182), rgb(49, 189, 220)'
      },
      {
        title: 'Diseño Web Rapido',
        text1: 'Crea un sitio web con un presupuesto',
        text2: 'muy bajo en poco tiempo',
        image1: 'random-image2.jpg',
        link: 'link2',
        backgroundColor: 'linear-gradient(55deg, #A413B5, #FC646B)'
      },
      {
        title: 'Mantenimiento Web',
        text1: 'Nos encargamos de tu web.',
        text2: 'Nos aseguramos de que funcione 24/7',
        image1: 'random-image3.jpg',
        link: 'link3',
        backgroundColor: 'linear-gradient(55deg, #57F77E, #33B6D8)'
      },
      {
        title: 'Optimizacion Web',
        text1: 'Mejoramos y/o actualizamos el codigo de tu web',
        text2: '',
        image1: 'random-image4.jpg',
        link: 'link4',
        backgroundColor: 'linear-gradient(55deg, #FAB056, #DE3933)'
      }
    ];















  }
