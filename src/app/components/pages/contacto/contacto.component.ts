import {  Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {

  constructor(private headerService: HeaderService) { }


  // Establece el color de la letra del header en este componente.
  ngOnInit(): void {
    this.headerService.setColorLetra('black');
  }

  onSubmit(form: any) {
    // Lógica para procesar el envío del formulario
    console.log(form);
  }
}
