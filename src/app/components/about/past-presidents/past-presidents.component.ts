import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-past-presidents',
  standalone: true,
  imports: [PageHeroComponent, DatePipe],
  templateUrl: './past-presidents.component.html',
  styleUrl: './past-presidents.component.css'
})
export default class PastPresidentsComponent {
  list = [
    { name: 'Alhaji Auwalu Ilu', date: '2010 - 2014', image: 'assets/presidents/Alhaji_Auwalu_Ilu.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'Dayo Adeshina', date: '2014 - 2018', image: 'assets/presidents/Dayo_Adeshina.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'Nuhu Yakubu', date: '2018 - 2022', image: 'assets/presidents/Nuhu_Yakubu.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
  ]
}
