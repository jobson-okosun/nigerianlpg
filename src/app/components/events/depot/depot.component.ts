import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';
import { PriceWidgetComponent } from '../../price-widget/price-widget.component';

@Component({
  selector: 'app-depot',
  standalone: true,
  imports: [PageHeroComponent, PriceWidgetComponent, CurrencyPipe, DatePipe, NgClass],
  templateUrl: './depot.component.html',
  styleUrl: './depot.component.css'
})
export default class DepotComponent implements OnInit {

  list = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit(): void {
    this.getDepotPrices()
  }

  getDepotPrices() {
    this.dataService.getDepotPrices().subscribe({
      next: (res: any) => {
        this.list.set(res)
      }
    })
  }
}
