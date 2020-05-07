import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  ChangeDetectorRef,
  Input,
  SimpleChanges,
  Renderer2
} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {WindowService} from '../../shared/_services/window.service';

interface Opts {
  position: number;
  width: number;
  breakpoints: any[];
  items?: any;
  itemsArray?: number[];
  counter?: number;
  max?: boolean;
  nav?: boolean;
  dots?: boolean;
  margin?: number;
  disableAutoWidth?: boolean;
  fullScroll?: boolean;
  options?: boolean;
  shadows?: boolean;
}

@Component({
  selector: 'app-incfile-carousel',
  templateUrl: './incfile-carousel.component.html',
  styleUrls: ['./incfile-carousel.component.scss']
})
export class IncfileCarouselComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('main', {static: false}) main: ElementRef;
  @ViewChild('container', {static: false}) container: ElementRef;
  @Input() options: Opts;
  carouselWidth: number;
  itemVisible: number;
  loader: boolean;
  itemsTrueWidth: number;
  children: any;
  observer: IntersectionObserver;
  lastItemVisible: boolean;
  showShadow: boolean;

  constructor(public render: Renderer2, private rs: WindowService) {
    this.loader = true;
    this.children = [];
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        this.lastItemVisible = true;
        this.options.max = true;
      } else {
        this.lastItemVisible = false;
        this.options.max = false;
      }
    }, {threshold: [1]});
  }

  ngOnInit(): void {
    console.log(this.options);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.render.setStyle(this.container.nativeElement, 'transform', 'translate3d(0px, 0px, 0px)');
      this.render.setStyle(this.container.nativeElement, 'transition', 'all 0.25s ease 0s');
      this.getCarouselWidth();
    }, 600);
    setTimeout(() => {
      this.rs.getScreenSize();
    }, 1200);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options && changes.options.currentValue) {
      this.options.counter = 0;
      this.rs.onResize$.pipe(debounceTime(100)).subscribe(val => {
        this.checkScreenSize(val);
      });
    }
  }

  swipe(dir, e) {
    this.observer.observe(this.container.nativeElement.lastElementChild);
    if ((e.type === 'swipeleft' || e.type === 'swiperight') && this.options.fullScroll) {
      return false;
    } else {
      if (dir === 0 && this.options.position !== 0) {
        this.options.max = false;
        this.options.counter--;
        if (!this.options.fullScroll) {
          this.options.position = this.options.position + this.options.width;
        } else {
          if (Math.abs(this.options.position) > this.carouselWidth) {
            this.options.position = this.options.position + this.carouselWidth - this.children.last.offsetWidth;
          } else {
            this.options.position = 0;
          }
        }
        this.render.setStyle(this.container.nativeElement, 'transform', 'translate3d(' + this.options.position + 'px, 0px, 0px)');
        this.setClass();
      }
      if (dir === 1 && !this.lastItemVisible) {
        this.options.max = false;
        this.options.counter++;
        if (!this.options.fullScroll) {
          this.options.position = this.options.position - this.options.width;
        } else {
          if (Math.abs(this.itemsTrueWidth - this.carouselWidth - Math.abs(this.options.position)) > Math.abs(this.options.position) && (this.itemsTrueWidth - this.carouselWidth) > this.carouselWidth) {
            this.options.position = this.options.position - this.carouselWidth + this.children.last.offsetWidth;
          } else {
            this.options.position = -(this.main.nativeElement.offsetWidth - this.carouselWidth);
            this.options.max = true;
          }
        }
        this.render.setStyle(this.container.nativeElement, 'transform', 'translate3d(' + this.options.position + 'px, 0px, 0px)');
        this.setClass();
        if (this.lastItemVisible) {
          this.options.max = true;
        }
      } else if (this.lastItemVisible) {
        this.options.max = true;
      }
    }
  }

  checkScreenSize(size) {
    this.options.breakpoints.forEach(el => {
      if (el.screenMin < size.width && el.screenMax > size.width) {
        this.itemVisible = el.items;
        console.log(this.itemVisible, this.options.items.length);
        if (this.itemVisible !== this.options.items.length && this.itemVisible < this.options.items.length) {
          this.options.itemsArray = new Array(this.options.items.length - this.itemVisible + 1);
        } else {
          this.options.itemsArray = [];
          this.options.max = true;
        }
      }
    });
    if (this.main.nativeElement.offsetWidth === 0) {
      setTimeout(() => {
        this.checkScreenSize(size);
      }, 500);
    } else {
      if (!this.options.margin) {
        this.options.margin = 0;
      }
      const itemWidth = +((this.main.nativeElement.offsetWidth + this.options.margin) / this.itemVisible) - (this.options.margin);
      if (!this.options.disableAutoWidth) {
        const childArray = this.container.nativeElement.children;
        for (const i of childArray) {
          this.render.setStyle(i, 'min-width', itemWidth + 'px');
          this.render.setStyle(i, 'margin-right', this.options.margin + 'px');
        }
      }
      if (!this.options.fullScroll) {
        this.options.width = itemWidth + this.options.margin;
      }
      this.render.setStyle(this.container.nativeElement, 'transform', 'translate3d(0px, 0px, 0px)');
      this.options.counter = 0;
      this.options.position = 0;
    }
    this.setClass();
    this.loader = false;
    console.log(this.options, this.itemVisible);
  }

  swipeTo(i) {
    this.options.counter = i;
    this.options.position = -(i * this.options.width);
    this.render.setStyle(this.container.nativeElement, 'transform', 'translate3d(' + this.options.position + 'px, 0px, 0px)');
    this.setClass();
  }

  setClass() {
    const childCollection = this.container.nativeElement.children;
    for (const i of childCollection) {
      this.render.removeClass(i, 'active');
    }
    let childArray = Array.from(childCollection);
    childArray = childArray.slice(this.options.counter, this.options.counter + this.itemVisible);
    for (const i of childArray) {
      this.render.addClass(i, 'active');
    }
  }

  getCarouselWidth() {
    if (this.main.nativeElement.offsetWidth > 0) {
      this.carouselWidth = this.main.nativeElement.parentNode.parentNode.offsetWidth;
      this.itemsTrueWidth = 0;
      for (const i of this.container.nativeElement.children) {
        this.itemsTrueWidth += i.offsetWidth;
      }
      this.children.last = this.container.nativeElement.lastChild;
      this.children.first = this.container.nativeElement.children[0];
      this.observer.observe(this.container.nativeElement.lastElementChild);
      if (this.main.nativeElement.parentNode.parentNode.offsetWidth >= this.main.nativeElement.offsetWidth) {
        this.showShadow = false;
      } else {
        this.showShadow = true;
      }
    } else {
      setTimeout(() => {
        this.getCarouselWidth();
      }, 200);
    }

  }

  shadowsOnScroll(e) {
    if (this.options.shadows) {
      const scrollLeft = e.target.scrollLeft;
      const scrollWidth = e.target.scrollWidth;
      const parentWidth = e.target.parentElement.clientWidth;
      if (scrollLeft < (scrollWidth - parentWidth)) {
        e.target.parentElement.classList.add('shadowLeft');
        e.target.parentElement.classList.add('shadowRight');
      }
      if (scrollLeft === 0) {
        e.target.parentElement.classList.remove('shadowLeft');
      }
      if (scrollLeft === (scrollWidth - parentWidth)) {
        e.target.parentElement.classList.remove('shadowRight');
      }
    }

  }
}
