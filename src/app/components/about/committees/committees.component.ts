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
  list = [
    { name: 'FELIX EKUNDAYO', title: 'PRESIDENT', image: 'assets/management/PRESIDENT_FELIX_EKUNDAYO.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'LADI FALOLA', title: 'DEPUTY PRESIDENT', image: 'assets/management/DEPUTY_PRESIDENT_LADI_FALOLA.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'FEMI FANOIKI', title: '1ST VICE PRESIDENT', image: 'assets/management/1ST_VICE_PRESIDENT_FEMI_FANOIKI.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'BASHIR ABDULRAHMAN', title: '2ND VICE PRESIDENT', image: 'assets/management/2ND_VICE_PRESIDENT_BASHIR_ABDULRAHMAN.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'JOY SHAIYEN', title: 'HONOURABLE TREASURER', image: 'assets/management/HONOURABLE_TREASURER_JOY_SHAIYEN.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'OLAYIDE BENJAMIN', title: 'DEPUTY TREASURER', image: 'assets/management/DEPUTY_TREASURER_OLAYIDE_BENJAMIN.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
    { name: 'LANRE BAIYEWU', title: 'EXECUTIVE SECRETARY', image: 'assets/management/Lanre_Baiyewu_Executive_Secretary.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
  ]
}
