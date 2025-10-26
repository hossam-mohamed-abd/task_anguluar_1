import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  viowimage = true;
  numper = 1;
  srcimageviow = '/img/port1.png';
  viowimagee(event: Event): void {
    this.numper = Number((event.target as HTMLElement).getAttribute('test'));
    this.viowimage = false;
    this.srcimageviow = '/img/port' + this.numper + '.png';
    console.log(this.srcimageviow);
  }
  hiddenviowimage() {
    this.viowimage = true;
  }
}
