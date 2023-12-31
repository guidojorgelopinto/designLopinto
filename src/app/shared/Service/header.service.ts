import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private colorLetra: string = ''; // Color inicial

  resetColorLetra(): void {
    this.colorLetra = ''; // Restablecer el color de la letra
  }

  setSticky(arg0: boolean): void {
    if (arg0) {
      // Código para habilitar el sticky behavior
    } else {
      // Código para deshabilitar el sticky behavior
    }
  }

  setColorLetra(color: string): void {
    this.colorLetra = color;
  }

  getColorLetra(): string {
    return this.colorLetra;
  }
}
