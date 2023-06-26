import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/Service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.headerService.setSticky(false); // Desactiva el sticky en el header
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollThreshold = 100; // Punto de desplazamiento en píxeles para activar el "sticky"
    const isTop = scrollTop < scrollThreshold;

    if (isTop) {
      this.headerService.setSticky(false); // Desactiva el sticky en la parte superior
    } else {
      this.headerService.setSticky(true); // Activa el sticky al desplazarse hacia abajo
    }
  }

  scrollToSection() {
    const section = this.elementRef.nativeElement.querySelector('#seccion-destino');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
