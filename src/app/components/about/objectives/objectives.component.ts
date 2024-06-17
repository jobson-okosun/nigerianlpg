import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export default class ObjectivesComponent {
  list = [
    { title: 'Promote LPGas Industry', icon: 'workspace_premium', description: 'To promote and protect the LP Gas industry in Nigeria.'},
    { title: 'Promote Good Work Ethics', icon: 'trending_up', description: 'To promote and encourage the highest standard of professionalism and sound ethics in the LP Gas sector.'},
    { title: 'Decimation of Information', icon: 'accessibility_new', description: 'To empower all stakeholders through information, education and networking.'},
    { title: 'LP Gas advocacy', icon: 'wind_power', description: 'To be the mouthpiece of LP Gas advocacy in Nigeria.'},
    { title: 'Transparency', icon: 'lightbulb', description: 'To operate a transparent, open and accountable Association.'},
    { title: 'Promote Safety', icon: 'shield', description: 'Primary objective to promote the safe use of LP Gas in Nigeria at affordable costs.'},
    { title: 'Protection', icon: 'policy', description: 'Protect the interest of the LP Gas industry.'},
  ]
}
