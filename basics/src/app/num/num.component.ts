import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrl: './num.component.css'
})
export class NumComponent {

  @Input() num: number = 0 

  @Output() numChange = new EventEmitter<number>

  dec() {
    this.num -= 1
    this.numChange.emit(this.num)
  }
  inc() {
    this.num += 1
    this.numChange.emit(this.num)
  }



}
