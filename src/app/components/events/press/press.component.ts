import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import { formatDate } from '../../../util/helper';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './press.component.html',
  styleUrl: './press.component.css'
})
export default class PressComponent implements OnInit {

  list = signal<any[]>([])
  private dataService = inject(DataService)
  
  ngOnInit(): void {
    this.getPressReleases()
  }

  formatDate(str: string): string {
    return formatDate(str)
  }

  getPressReleases() {
    this.dataService.getPressRelease().subscribe({
      next: (res: any) => {
        this.list.set(res)
      }
    })
  }

}
