import { Component, inject, OnInit, signal, } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';
import { formatDate  } from '../../../util/helper';
import DataService from '../../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [PageHeroComponent, DatePipe],
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.css',
})
export default class ConferenceComponent implements OnInit {


  list = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit(): void {
    this.getCOnferences()
  }


  getCOnferences() {
    this.dataService.getConferences().subscribe({
      next: (res: any) => {
        this.list.set(res)
      }
    })
  }
  
  formatDate(str:string): string {
    return formatDate(str)
  }
}
