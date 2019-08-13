import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('2s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'customePipe';
  fileSizes = [10, 100, 1000, 10000, 100000, 1000000, 10000000];
  largeFileSize = Math.pow(10, 15);
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  update(event) {
    console.log('event', event);
  }
}
