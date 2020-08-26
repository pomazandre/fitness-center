import { Component } from '@angular/core';

@Component({
  selector: 'app-abon',
  templateUrl: './abon.component.html',
  styleUrls: ['./abon.component.css']
})

export class AbonementComponent {
  mdlType: string = 'Standart';
  mdlTime: string = '0';
  mdlDisplayPrice: boolean = false;
  mdlCost: string = '';
  standartPrices: number[] = [21, 40, 59.85, 116.85];
  specialPrices: number[] = [19.50, 33, 49, 96];

  constructor() {
  }

  handleClick() {
    this.mdlDisplayPrice = true;
    if (this.mdlType === 'standart') {
      this.mdlCost = String(this.standartPrices[Number.parseInt(this.mdlTime)]);
    } else {
      this.mdlCost = String(this.specialPrices[Number.parseInt(this.mdlTime)]);
    }
  }

}
