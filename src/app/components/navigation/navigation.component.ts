import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showMobileMenuActive: boolean;
  showMobileMenuState: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  showMobileMenu() {
    this.showMobileMenuActive = !this.showMobileMenuActive;
    setTimeout(() => {
      this.showMobileMenuState = true;
    }, 300);
  }

  hideMobileMenu(e) {
    if (!e.target.classList.contains('hamburgerBox') && !e.target.classList.contains('hamburgerInner')) {
      this.showMobileMenuState = false;
      setTimeout(() => {
        this.showMobileMenuActive = false;
      }, 300);
    }
  }

  menuAction(e) {
    e.preventDefault();
    console.log(e.target.parentElement)
    if (e.target.parentElement.classList.contains('showSubmenu')) {
      e.target.parentElement.classList.remove('showSubmenu');
    } else {
      e.target.parentElement.classList.add('showSubmenu');
    }

  }
}
