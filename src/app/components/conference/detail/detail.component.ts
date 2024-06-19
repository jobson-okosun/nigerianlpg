import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  standalone: true,
  imports: [PageHeroComponent, DatePipe, CurrencyPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export default class DetailComponent implements OnInit {

  @Input() conferencetitle:string ;
  conference = signal<any>({})

  private dataService = inject(DataService)

  ngOnInit() {
     this.getConference()
  }

  async getConference() {
    try {
      const response = await firstValueFrom(this.dataService.getConference(this.conferencetitle))
      const event = (response.data as []).find(( item:any) => item.slug == this.conferencetitle)
      this.conference.set(event)
    } catch (error) { } 
  }
}
