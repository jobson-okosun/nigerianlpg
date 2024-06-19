import { DatePipe } from "@angular/common";
import { Component, inject, Input, OnInit, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import DataService from "../../../services/data.service";
import PageHeroComponent from "../../page-hero/page-hero.component";

@Component({
    standalone: true,
    templateUrl: './news-details.component.html',
    styleUrl: './news-details.component.css',
    imports: [PageHeroComponent, DatePipe]
}) 

export default class NewsDetailComponent implements OnInit { 

    @Input() newstitle:string ;
    news = signal<any>(null)
  
    private dataService = inject(DataService)
  
    ngOnInit() {
       this.getEvent()
    }
  
    async getEvent() {
      try {
        const response = await firstValueFrom(this.dataService.getNewsPost(this.newstitle))
        const event = (response.data as []).find(( item:any) => item.slug == this.newstitle)
        this.news.set(event)
      } catch (error) { } 
    }
}