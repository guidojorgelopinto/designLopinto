// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HeaderService {
//   resetColorLetra() {
//     throw new Error('Method not implemented.');
//   }
//   setSticky(arg0: boolean) {
//     throw new Error('Method not implemented.');
//   }
//   private colorLetra: string = ''; // Color inicial

//   setColorLetra(color: string): void {
//     this.colorLetra = color;
//   }

//   getColorLetra(): string {
//     return this.colorLetra;
//   }
// }

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
