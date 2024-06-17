import { Component, computed, inject, OnInit, signal } from '@angular/core';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [PageHeroComponent,],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})

export default class MembersComponent implements OnInit {

  serviceIndicators = signal<any>([])
  filter = computed(() => Object.keys(this.serviceIndicators()))
  showFilter = signal(true)
  applyFilter = signal(false);
  datasource = signal<any[]>([])

  diamondList = computed(() => {
    let arr:any = this.datasource().filter((item:any) => item.package_id == 3)
    arr = this.applySelectedFilter(arr)
    return arr
  })

  goldList = computed(() => {
    let arr:any = this.datasource().filter((item:any) => item.package_id == 2)
    arr = this.applySelectedFilter(arr)
    return arr
  })

  silverList = computed(() => {
    let arr:any = this.datasource().filter((item:any) => item.package_id == 1)
    arr = this.applySelectedFilter(arr)
    return arr
  })

  private dataService = inject(DataService)
  limit = 80


  ngOnInit(): void {
    const indicators = {
      'all': { title: 'All', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/city-cityscape-fuel-svgrepo-com.svg' },
      'Offtaker': { title: 'Off-takers', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/ship-front-svgrepo-com.svg' },
      'Terminal/Depots': { title: 'Terminal/Depots', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/drink2-svgrepo-com.svg' },
      'Plant Owner': { title: 'Plants', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/battery3-svgrepo-com.svg' },
      'Logistics': { title: 'Logistics', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/truck-svgrepo-com.svg' },
      'Equipment/Accessories': { title: 'Equipment/Accessories', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/tools-svgrepo-com.svg' },
      'Cylinder Manufacturers': { title: 'Cylinder Manufacturers', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/battery-svgrepo-com.svg' },
      'Business Advisory': { title: 'Business Advisory', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/briefcase-svgrepo-com.svg' },
      'Trading': { title: 'Trading', img: 'https://www.nigerialpgas.com/assets/img/cat_icon/line-chart-svgrepo-com.svg' },
    }

    this.serviceIndicators.set(indicators)
    this.getMembers()
  }

  applySelectedFilter(arr: any[]) {

      if(this.applyFilter() && arr.length) {
        const constraints = this.getSelectedFilters()
        
        arr = arr.filter((item:any) => {
          const resolveItem = this.toStringArray(item.activities)
          return resolveItem.some((val:any) => {
             return constraints.includes(val.replaceAll('_or_', '/').replaceAll('_', ' '))
          })
        })
      }

      console.log({arr})
      return arr
  }

  selectFilter(event: Event) {
    const element = event.currentTarget as HTMLElement

    if (element.getAttribute('selected')) {
      element.removeAttribute('selected')
    } else {
      element.setAttribute('selected', 'true')
    }

    element.classList.toggle('!bg-primary')
    element.classList.toggle('!text-white')
  }

  getMembers() {
    this.dataService.getMembers().subscribe({
      next: (res: any) => {
        const sort = res.sort((a:any, b:any) => a.company_name.localeCompare(b.company_name));
        this.datasource.set(sort)
      }
    })
  }

  toStringArray(str:string) {
    try {
      const item = JSON.parse(str);
      if (Array.isArray(item)) {
        return item;
      } else {
        const map  = Object.keys(item).filter((key:any) => item[key] !== null);
        return map
      }
    } catch (error:any) {
      return [];
    }
  }

  getServiceIndicator(str:string) {
     str = str.trim().replaceAll('_or_', '/').replaceAll('_', ' ')
     return this.serviceIndicators()[str]?.['img']
  }

  getSelectedFilters() {

    const inputs = document.querySelectorAll('input[type="hidden"]')
    const map = Array.from(inputs).map((item:any) => {
       const hasSelect = (item as HTMLInputElement).parentElement?.getAttribute('selected')
       return hasSelect ? (item as HTMLInputElement).value : null
    })
    return map.filter((item:any) => item)
  }

  filterList():any {
    this.applyFilter.set(true)

    const constraints = this.getSelectedFilters()
    if(constraints.includes('all')) {
      this.applyFilter.set(false)
    }

    this.getMembers()
  }

  search(): void {
    const query = (document.querySelector('[name="search"]') as HTMLInputElement).value.trim()
    this.dataService.getMembers().subscribe({
      next: (res: any) => {

        const options = {
          keys: ['company_name'], 
          includeScore: true 
        };
    
        const fuse = new Fuse(res, options);
        const result = fuse.search(query);
    
        const resp = result.map(res => res.item);        
        const sort = resp.sort((a:any, b:any) => a.company_name.localeCompare(b.company_name));
        this.datasource.set(sort)
      }
    })
  }
}
