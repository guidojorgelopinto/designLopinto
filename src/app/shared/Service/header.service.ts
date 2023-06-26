// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HeaderService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  resetColorLetra() {
    throw new Error('Method not implemented.');
  }
  setSticky(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  private colorLetra: string = ''; // Color inicial

  setColorLetra(color: string): void {
    this.colorLetra = color;
  }

  getColorLetra(): string {
    return this.colorLetra;
  }
}
