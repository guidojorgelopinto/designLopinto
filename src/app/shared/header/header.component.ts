import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  isSticky: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const header = this.elementRef.nativeElement.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollThreshold = 100; // Punto de desplazamiento en píxeles para activar el "sticky"
    this.isSticky = scrollTop > scrollThreshold;

    if (this.isSticky) {
      this.renderer.addClass(header, 'sticky');
    } else {
      this.renderer.removeClass(header, 'sticky');
    }
  }
}

