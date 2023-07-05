import {  Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

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
