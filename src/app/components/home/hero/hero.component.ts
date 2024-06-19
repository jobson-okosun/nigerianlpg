import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { SwiperCountDown } from '../../../util/config';
import { initSwiper, swiperSlideNext, swiperPreviousNext } from '../../../util/helper';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeroComponent implements OnInit, AfterViewInit {

  countdown = SwiperCountDown
  slides = signal<any[]>([])
  private countdownInterval: any;

  ngOnInit() {
    this.slides.set(['assets/lpg.jpg', 'assets/conf_2024_banner987.jpg']);
    initSwiper()
    this.startCountdown('2024-11-06T10:00:00');
  } 

  ngAfterViewInit(): void {}

  swiperSlideNext() {
    swiperSlideNext()
  }

  swiperPreviousNext() {
    swiperPreviousNext()
  }

  ngOnDestroy() {
    this.clearCountdown();
  }

  startCountdown(targetDate: string) {
    const endTime = new Date(targetDate).getTime();
    if (endTime <= Date.now()) {
      this.resetCountdown();
    } else {
      this.updateCountdown(endTime);
      this.countdownInterval = setInterval(() => this.updateCountdown(endTime), 1000);
    }
  }

  private updateCountdown(endTime: number) {
    const now = Date.now();
    const distance = endTime - now;

    if (distance < 0) {
      this.clearCountdown();
      this.resetCountdown();
    } else {
      this.countdown = this.calculateTime(distance);
    }
  }

  private calculateTime(distance: number) {
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  private clearCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private resetCountdown() {
    this.countdown = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
}
