import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  constructor() { }

  onSubmit(form: any) {
    // Lógica para procesar el envío del formulario
    console.log(form);
  }
}
