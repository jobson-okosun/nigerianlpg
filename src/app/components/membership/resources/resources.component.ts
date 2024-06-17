import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export default class ResourcesComponent implements OnInit  {


  downloadList = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit(): void {
    this.getDownLoads()
  }


  getDownLoads() {
    this.dataService.getResourceDownloadables().subscribe({
      next: (res: any) => {
        this.downloadList.set(res)
      }
    })
  }
}
