import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class App {
  isEditable = true;
}