import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Service/header.service';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {
  showBanner = true;

  constructor( private headerService: HeaderService) { }

  ngOnInit() {

    this.headerService.setColorLetra('black');   // Establece el color de la letra del header en este componente.
  }
}
