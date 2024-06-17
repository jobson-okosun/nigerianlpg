import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../services/data.service';
import PageHeroComponent from '../page-hero/page-hero.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export default class NewsletterComponent implements OnInit {

  downloadList = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit(): void {
    this.getDownLoads()
  }

  getDownLoads() {
    this.dataService.getNewsletterBulletins().subscribe({
      next: (res: any) => {
        this.downloadList.set(res)
      }
    })
  }
}
