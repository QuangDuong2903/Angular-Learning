import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, delay, from, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() name = ''

  number$: Observable<number>

  nums: number[] = []

  subcription: any

  constructor() {
    this.number$ = interval(1000)
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }

  changeName(event: Event) {
    this.name = (event.target as HTMLInputElement).value
  }

  ngOnInit(): void {
    this.subcription = this.number$.subscribe(num => {
      console.log(num)
      this.nums.push(num)
    }) 
  }

}
