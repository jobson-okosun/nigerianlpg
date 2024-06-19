import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../headers/header/header.component';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})


export default class TemplateComponent implements OnInit {

   private route = inject(ActivatedRoute)
   private titleService = inject(Title)
   private location = inject(Location)

  ngOnInit(): void {
    this.location.onUrlChange((url: string) => {
      this.updateTitle();
    });
    this.updateTitle();
  }

  updateTitle() {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    route.data.subscribe(data => {
      if(data['title']) {
        this.titleService.setTitle(`NLPGA | ${data['title']}`);
      }
    });
  }
} 

