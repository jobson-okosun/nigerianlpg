import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.css'
})
export default class CommitteesComponent {

}
