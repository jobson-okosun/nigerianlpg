import { Component } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-governing-councils',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './governing-councils.component.html',
  styleUrl: './governing-councils.component.css'
})
export default class GoverningCouncilsComponent {
  list = {
      executive: [
        { name: 'FELIX EKUNDAYO', title: 'PRESIDENT', image: 'assets/management/PRESIDENT_FELIX_EKUNDAYO.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'LADI FALOLA', title: 'DEPUTY PRESIDENT', image: 'assets/management/DEPUTY_PRESIDENT_LADI_FALOLA.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'FEMI FANOIKI', title: '1ST VICE PRESIDENT', image: 'assets/management/1ST_VICE_PRESIDENT_FEMI_FANOIKI.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'BASHIR ABDULRAHMAN', title: '2ND VICE PRESIDENT', image: 'assets/management/2ND_VICE_PRESIDENT_BASHIR_ABDULRAHMAN.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'LANRE BAIYEWU', title: 'EXECUTIVE SECRETARY', image: 'assets/management/Lanre_Baiyewu_Executive_Secretary.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'JOY SHAIYEN', title: 'HONOURABLE TREASURER', image: 'assets/management/HONOURABLE_TREASURER_JOY_SHAIYEN.jpg', socials: { fb: '', x: '', in: '', lki: ''}},
        { name: 'OLAYIDE BENJAMIN', title: 'DEPUTY TREASURER', image: 'assets/management/DEPUTY_TREASURER_OLAYIDE_BENJAMIN.jpeg', socials: { fb: '', x: '', in: '', lki: ''}},
      ],
      council: [
        { name: "Gas Terminalling" },
        { name: "Chimons Gas Limited" },
        { name: "Equus Trading & Logistics Limited" },
        { name: "Strategic Energy" },
        { name: "Matrix Energy" },
        { name: "AYM shafa holdings Limited" },
        { name: "Techno Oil" },
        { name: "Himma Merchants Limited" },
        { name: "Ultimate Gas Limited" },
        { name: "PNG Limited" },
        { name: "Arcus 360" },
        { name: "Mob integrated services" },
        { name: "Sentax oil and gas services" },
        { name: "Borkir int. co. limited" },
        { name: "Asiko power limited" },
        { name: "Kwale hydrocarbon nigeria limited" },
        { name: "Long view gas limited" },
        { name: "Quaint agencies" },
        { name: "Banner Energy limited" },
        { name: "Good intentions services Limited" },
        { name: "Prudent energy" },
        { name: "Rungas Prime Industries" },
        { name: "Hyson Limited" },
        { name: "Gastech energy solutions limited" },
        { name: "NLNG - Nigeria LNG Limited" },
        { name: "LCCI - Lagos Chamber of Commerce & Industry" },
        { name: "NNPC" },
        { name: "Women in nigeria LPG" },
        { name: "NLPGA Abuja Chapter" },
        { name: "Stockgap Fuels Limited" },
        { name: "Rainoil Limited" },
        { name: "NIPCO Plc" },
        { name: "SON - Standards Organization of Nigeria" },
        { name: "NMDPRA- Nigerian Midstream and Downstream Petroleum Regulatory Authority" }
      ]
   }
}
