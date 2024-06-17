import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import PageHeroComponent from '../../page-hero/page-hero.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [PageHeroComponent, DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export default class EventComponent implements OnInit  {
  list = signal<any[]>([])

  ngOnInit(): void {
     const events:any = [
       { thumbnail: '/assets/events/ilVRNpKf9hStmtGT1djLYT74MrkVMYzfRQZvAxNR.png', title: 'NLPGA 14th INTERNATIONAL CONFERENCE AND EXHIBITION', date: '2024-03-01', time: '10:00am',  type: 'free', location: 'Online'},
       { thumbnail: '/assets/events/91RboYkk2Wiab0i0GAj198PSs1krvzpDU3dv9Crw.jpg', title: 'NLPGA 13th INTERNATIONAL CONFERENCE AND EXHIBITION', date: '2023-11-07', time: '10:00am',  type: 'paid', location: 'Hybrid'},
       { thumbnail: '/assets/events/Vffg49shEt3dU9uSXRiTc9TcGL7CgziqLhanamC4.jpg', title: 'Regulatory and compliance webinar for NLPGA members', date: '2023-09-06', time: '10:00am',  type: 'paid', location: 'Online'},
       { thumbnail: '/assets/events/WBGsdJyy2zQpuWJyyd3MZsopRoywPvUl2s9BjL8L.jpg', title: '2020-04-30', date: '2024-03-01', time: '10:00am',  type: 'free', location: 'Hybrid'},
       { thumbnail: '/assets/events/zs4r5PMu7CWAWK5CfovOuVlDJGiG02Om9zTSKTZn.jpg', title: 'NLPGA @ Oando Teens Cooking Competition', date: '2016-07-03', time: '10:00am',  type: 'free', location: 'Ofline'},
       { thumbnail: '/assets/events/UDC6Ec5Djuyga9cid2nBzkYrSxTXlLkcQB0lLndV.jpg', title: 'LPG SAFETY TRAINING AND CERTIFICATION', date: '2016-04-06', time: '10:00am',  type: 'paid', location: 'Hybrid'},
       { thumbnail: '/assets/events/4sDFyi2iM3D35qGg5qmrkf7h5lxdK8eRqptk6afI.jpg', title: 'CMT Africa LPG Trade Summit', date: '2014-02-14', time: '10:00am',  type: 'Free', location: 'Offline'},
       { thumbnail: '/assets/events/B5vt6YZcByddtpT6HWlYztd4zSZEcCzIfpcOWM6N.jpg', title: 'NLPGA CEO’s Lunch 2011', date: '2011-02-26', time: '10:00am',  type: 'Free', location: 'Hybrid'},
     ]
     this.list.set(events)
  }
}
