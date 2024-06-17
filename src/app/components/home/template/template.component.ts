import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import { formatDate } from '../../../util/helper';
import { PriceWidgetComponent } from '../../price-widget/price-widget.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [HeroComponent, PriceWidgetComponent ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export default class TemplateComponent implements OnInit{

  newsList = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.dataService.getNews().subscribe({
      next: (res: any) => {
        const sliceList = (res as []).slice(0, 6)
        this.newsList.set(sliceList)
      }
    })
  }

  formatDate(str:string): string {
    return formatDate(str)
  }
}
