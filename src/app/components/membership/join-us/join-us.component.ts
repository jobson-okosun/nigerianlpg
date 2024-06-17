import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export default class JoinUsComponent {
  list = [
    { title: 'Anticipate & Drive Legislation and Policies', icon: 'workspace_premium', description: 'Influence the formulation of Legislation, Policies and Regulation.Provide effective advocacy to stimulate new thinking about Nigeria\'s Liquefied Petroleum Gas resources.'},
    { title: 'Promote Investment in Nigerian Gas Sector', icon: 'trending_up', description: 'Provide the platform for sharing points-of-view on industry opportunities in interactive settings and by participation in LPG related trade mission including LPG Summits.'},
    { title: 'Encourage Best Practices and Acceptable Standards', icon: 'accessibility_new', description: 'Towards optimising the economics of the entire LPG value chain while emphasising environmental sustainability and safety.'},
    { title: 'Be the Industry Resource Centre of Choice', icon: 'wind_power', description: 'Authority for information in the industry through knowledge exchange and constituted Training Group.'},
    { title: 'Enlightened Training on Industry Practice', icon: 'lightbulb', description: 'Through industry best practices and instructions in the process of bringing you to an agreed standard of proficiency.'},
  ]
}
