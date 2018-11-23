import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ANGULAR';
  counter = 0;

  @ViewChild('label')
  label: ElementRef;

  onChanged(value: boolean) {
    if (value) {
      this.counter++;
    }

    if (this.counter > 100) {
      this.label.nativeElement.textContent = '=)';
    }
  }

}
