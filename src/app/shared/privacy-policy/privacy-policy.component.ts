import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Service/header.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  showBanner = true;

  constructor( private headerService: HeaderService) { }

  ngOnInit() {

    this.headerService.setColorLetra('black');   // Establece el color de la letra del header en este componente.
  }
}
