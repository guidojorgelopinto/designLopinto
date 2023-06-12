import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private elementRef: ElementRef) { }

  scrollToSection() {
    const section = this.elementRef.nativeElement.querySelector('#seccion-destino');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
