import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthenticationService } from '../authetication/authentication.service';
import { from, fromEvent, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('search') searchInput: ElementRef | undefined;

  constructor(public authService: AuthenticationService) {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'keyup')
    .pipe(
      switchMap((e) => from(fetch(`https://picsum.photos/id/237/200/300/${((e as KeyboardEvent).target as HTMLInputElement).value}`)))
    ).subscribe(console.log)
    // .subscribe((e) => {
    //   console.log(((e as KeyboardEvent).target as HTMLInputElement).value);
    // });
  }

  ngOnInit(): void {}
}
