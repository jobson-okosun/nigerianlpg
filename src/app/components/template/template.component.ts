import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../headers/header/header.component';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})


export default class TemplateComponent {} 

