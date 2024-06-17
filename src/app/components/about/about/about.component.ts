import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
    lpgPropertries = [
      { title: 'Portable', icon: 'local_shipping', description: 'LP Gas can be transported, stored, and used virtually anywhere in the world. It does not require a fixed network and will not deteriorate over time.'},
      { title: 'Clean', icon: 'air_freshener', description: 'LP Gas is very clean burning and has lower greenhouse gas emissions than any other fossil fuel when measured on a total fuel cycle. Originating mainly from natural gas production, it is also non-toxic and will not contaminate soil or aquifers in the event of a leak.'},
      { title: 'Accessible', icon: 'accessibility_new', description: 'LP Gas can be accessible to everyone everywhere today without major infrastructure investment. Nothing needs to be invented and there are enough reserves to last many decades.'},
      { title: 'Efficient', icon: 'wind_power', description: 'LP Gas is cost-effective, since a high proportion of its energy content is converted into heat. LP Gas can be up to five times more efficient than traditional fuels, resulting in less energy wastage and better use of our pl'},
      { title: 'Convenient', icon: 'self_improvement', description: 'LP Gas is a multi-purpose energy. There are more than a thousand applications, from cooking, heating, air conditioning and transportation, to cigarette lighters and even the Olympic torch.'},
    ]
}
