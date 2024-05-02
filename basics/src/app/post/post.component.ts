import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('img') postImg = ''

  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor() called', this.postImg)
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy() called')
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit() called')
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked() called')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called')
    
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit() called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called')
    console.log(changes)
    
  }
  ngDoCheck(): void {
    // console.log('ngDoChekck() called')
  }
  ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg)
  }

}
