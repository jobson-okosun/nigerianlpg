import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import PageHeroComponent from '../../page-hero/page-hero.component';
import { formatDate, initSwiper, swiperPreviousNext, swiperSlideNext } from '../../../util/helper';
import DataService from '../../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [PageHeroComponent, DatePipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class NewsComponent implements OnInit {

  streams = signal<any>([])
  newsList = signal<any[]>([])
  private urlSanitizer = inject(DomSanitizer)
  private dataService = inject(DataService)

  ngOnInit(): void {
    this.getNews()
    this.getStreams()
  }

  sanitizeUrl(url: string) {
    if (url.includes('youtube.com') || url.includes('youtube-nocookie.com')) {
      return this.urlSanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return this.urlSanitizer.bypassSecurityTrustUrl(url);
    }
  }

  getStreams() {
    this.dataService.getNewsMediaStreams().subscribe({
      next: (res: any) => {
        this.streams.set(res)
        this.initSwiper()
      }
    })
  }

  getNews() {
    this.dataService.getNews().subscribe({
      next: (res: any) => {
        this.newsList.set(res)
      }
    })
  }
  

  initSwiper() {
    const config = {
      slidesPerView: 1,
      loop: true,
      pagination: true,
      autoplay: {
        delay: 5000,
      },
    }
    initSwiper(config)
  }

  swiperSlideNext() {
    swiperSlideNext()
  }

  swiperPreviousNext() {
    swiperPreviousNext()
  }

  formatDate(str:string): string {
    return formatDate(str)
  }
}
