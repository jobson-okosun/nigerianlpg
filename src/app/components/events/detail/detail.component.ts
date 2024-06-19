import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [PageHeroComponent, DatePipe, CurrencyPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export default class DetailComponent implements OnInit {

  @Input() eventname:string ;
  event = signal<any>(null)

  private dataService = inject(DataService)

  ngOnInit() {
     this.getEvent()
  }

  async getEvent() {
    try {
      const response = await firstValueFrom(this.dataService.getEvent(this.eventname))
      const event = (response.data as []).find(( item:any) => item.slug == this.eventname)
      this.event.set(event)
    } catch (error) { } 
  }
}
