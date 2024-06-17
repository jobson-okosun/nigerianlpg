import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [HeaderComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  ngOnInit() {
    this.headerStyleEventListener();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  headerStyleEventListener() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  openNav() {
      const nav = document.querySelector('#nav');
      (nav as HTMLElement).style.display = 'block'
  }

  scrollHandler() {
    if (!this.isMobile()) {
      const nav = document.querySelector('.mini-header') as HTMLElement;
      if (window.scrollY > 500) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    }
  }

  isMobile(): boolean {
    return window.matchMedia('(max-width: 1024px)').matches;
  }
  
}
