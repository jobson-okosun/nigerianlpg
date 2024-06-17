import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export default class MeetingComponent {

}
