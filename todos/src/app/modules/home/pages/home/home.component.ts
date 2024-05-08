import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
  combineLatestWith,
  concatMap,
  delay,
  from,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  of,
  switchMap,
  take,
  timer,
} from 'rxjs';
import { PictureService } from '../../../../core/http/picture/picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() name = '';

  number$: Observable<number>;

  nums: number[] = [];

  subcription: any;

  constructor(private pictureService: PictureService) {
    this.number$ = interval(1000).pipe(take(5));
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  changeName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  subject = new BehaviorSubject('0');

  ngOnInit(): void {
    this.subcription = this.number$.subscribe((num) => {
      // console.log(num)
      this.nums.push(num);
    });
    this.subject.subscribe((value) => console.log('first', value));
    this.subject.next('a');
    this.subject.subscribe((value) => console.log('second', value));
    this.subject.next('b');

    // this.pictureService.getOneImage('2').pipe(
    //   combineLatestWith(this.pictureService.getOneImage('1').pipe(delay(2000)))
    // ).subscribe(console.log)

    // interval(5000).pipe(take(10), concatMap(() => interval(1000).pipe(take(10)))).subscribe(console.log)
  }
}
