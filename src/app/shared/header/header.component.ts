import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  // Menu stick

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
onWindowScroll() {
  const header = this.elementRef.nativeElement.querySelector('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollThreshold = 100; // Punto de desplazamiento en píxeles para activar el "sticky"
  const activateSticky = scrollTop > scrollThreshold;

  if (activateSticky) {
    this.renderer.addClass(header, 'sticky');
  } else {
    this.renderer.removeClass(header, 'sticky');
  }
}




}
