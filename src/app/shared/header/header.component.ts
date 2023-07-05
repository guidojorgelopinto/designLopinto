import { Component, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { HeaderService } from '../Service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  colorLetra: string = '';
  isMenuOpen: boolean = false;

  constructor(private headerService: HeaderService, private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.colorLetra = this.headerService.getColorLetra();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const header = this.elementRef.nativeElement.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollThreshold = 100;
    this.isSticky = scrollTop > scrollThreshold;

    if (this.isSticky) {
      this.renderer.addClass(header, 'sticky');
    } else {
      this.renderer.removeClass(header, 'sticky');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
