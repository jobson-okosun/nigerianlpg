import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { timer } from 'rxjs';
import DataService from '../../services/data.service';
import { initMarquee } from '../../util/helper';

@Component({
  selector: 'price-widget',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './price-widget.component.html',
  styleUrl: './price-widget.component.css'
})
export class PriceWidgetComponent implements OnInit {
  
  list = signal<any[]>([])
  private dataService = inject(DataService)
  
  ngOnInit(): void {
    this.getDepotprices()
  }

  getDepotprices() {
    this.dataService.getDepotPrices().subscribe({
      next: (res: any) => {
        this.list.set(res)
      }
    })
  }
  ngAfterViewInit(): void {
    timer(1000).subscribe(() => this.initMarquee())
  }

  initMarquee() {
    initMarquee('.marquee', 0.5, this.list().length)
  }

}
