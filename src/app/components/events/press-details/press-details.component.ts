import { DatePipe } from "@angular/common";
import { Component, inject, Input, OnInit, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import DataService from "../../../services/data.service";
import PageHeroComponent from "../../page-hero/page-hero.component";

@Component({
    standalone: true,
    templateUrl: './press-details.component.html',
    styleUrl: './press-details.component.css',
    imports: [PageHeroComponent, DatePipe]
}) 

export default class NewsDetailComponent implements OnInit { 

    @Input() release:string ;
    news = signal<any>(null)
  
    private dataService = inject(DataService)
  
    ngOnInit() {
       this.getEvent()
    }
  
    async getEvent() {
      try {
        const response = await firstValueFrom(this.dataService.getNewsPost(this.release))
        const event = (response.data as []).find(( item:any) => item.slug == this.release)
        this.news.set(event)
      } catch (error) { } 
    }
}