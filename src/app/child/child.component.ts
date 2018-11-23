import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  value = 'CLICK';

  @Input() userName: string;

  _message: string;

  valid: boolean;

  @Input()
  set message(text: string) {
    if (text === 'ANGULAR') {
      this._message = 'YES';
      this.valid = true;
    } else {
      this._message = 'NO';
      this.valid = false;
    }
  }

  @Output() isValid = new EventEmitter<boolean>();
  checkValid() {
    this.isValid.emit(this.valid);
  }

  constructor() { }

  ngOnInit() {
    console.log('CREATE');
  }

  ngOnDestroy() {
    console.log('DESTROY');
  }

}
