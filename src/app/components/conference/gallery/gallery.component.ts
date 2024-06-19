
import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import DataService from '../../../services/data.service';
import PageHeroComponent from '../../page-hero/page-hero.component';


@Component({
  standalone: true,
  imports: [PageHeroComponent, NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export default class GalleryComponent implements OnInit {

  list = signal<any[]>([])
  private dataService = inject(DataService)

  ngOnInit() {
     this.getPhotos()
  }

  async getPhotos() {
    try {
      const response = await firstValueFrom(this.dataService.getPhotos())
      this.list.set(response)
    } catch (error) { } 
  }

  getClass(index: number): string {
    if (index % 5 === 0) {
      return 'large';
    } else if (index % 5 === 1) {
      return 'wide';
    } else if (index % 5 === 2) {
      return 'large-wide';
    } else {
      return '';
    }
  }

}
