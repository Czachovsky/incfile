import {Directive, EventEmitter, HostListener, Input, NgModule, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appIncfileSpaceDebounceClick]'
})
export class ClickDirective implements OnInit, OnDestroy {

  @Input()
  debounceTime = 100;

  @Output()
  debounceClick = new EventEmitter();

  private clicks = new Subject();
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}

@NgModule({
  declarations: [ClickDirective],
  exports: [ClickDirective]
})

export class ClickDirectiveModule {
}
