import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [PageHeroComponent, DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export default class EventComponent implements OnInit  {
  
  list = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit(): void {
     this.getEvents()
  }

  getEvents() {
     this.dataService.getEvents().subscribe({
      next: (res:any) => {
         this.list.set(res)
      }
     })
  }
}
