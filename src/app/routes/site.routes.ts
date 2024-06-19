import { Route } from '@angular/router';

export default [
    { 
        path: '', 
        loadComponent: () => import('../components/template/template.component'),
        children: [
            { path: '', loadComponent: () => import('../components/home/template/template.component') },
            { path: 'what-is-nlpg', data: { title: 'About us' }, loadComponent: () => import('../components/about/about/about.component') },
            { path: 'our-objective', data: { title: 'Our Objectives' }, loadComponent: () => import('../components/about/objectives/objectives.component') },
            { path: 'management', data: { title: 'Management' }, loadComponent: () => import('../components/about/committees/committees.component') },
            { path: 'governing-council', data: { title: 'Governing Council' }, loadComponent: () => import('../components/about/governing-councils/governing-councils.component') },
            { path: 'presidents', data: { title: 'Past Presidents' }, loadComponent: () => import('../components/about/past-presidents/past-presidents.component') },
            
            { 
                path: 'our-events',
                children: [
                    { path: '',  data: { title: 'Events' }, loadComponent: () => import('../components/events/event/event.component') },
                    { path: ':eventname',  data: { title: 'Register For Event' }, loadComponent: () => import('../components/events/detail/detail.component') }
                ]  
            },
            { path: 'liveevents', data: { title: 'Live Events' }, loadComponent: () => import('../components/events/meeting/meeting.component') },
            { 
                path: 'news',  
                children: [
                    { path: '', data: { title: 'News' }, loadComponent: () => import('../components/events/news/news.component') },
                    { path: ':newstitle', data: { title: 'News' }, loadComponent: () => import('../components/events/news-details/news-details.component') }
                ]
            },
            { 
                path: 'conference',  
                children: [
                    { path: '', data: { title: 'Conference' }, loadComponent: () => import('../components/conference/conference/conference.component') },
                    { path: 'gallery', data: { title: 'Gallery' }, loadComponent: () => import('../components/conference/gallery/gallery.component') },
                    { path: ':conferencetitle', data: { title: 'Conference' }, loadComponent: () => import('../components/conference/detail/detail.component') },
                ]
            },
            { 
                path: 'press-release',  
                children: [
                    { path: '', data: { title: 'Press Release' }, loadComponent: () => import('../components/events/press/press.component') },
                    { path: ':release', data: { title: 'Press Release' }, loadComponent: () => import('../components/events/press-details/press-details.component') }
                ]
            },
            { path: 'depot-price', data: { title: 'Depot Prices' }, loadComponent: () => import('../components/events/depot/depot.component') },


            { path: 'our-members', data: { title: 'Our Members' }, loadComponent: () => import('../components/membership/members/members.component') },
            { path: 'why-join', data: { title: 'Join us' }, loadComponent: () => import('../components/membership/join-us/join-us.component') },
            { path: 'joincommunity', data: { title: 'Online Committee Forum' }, loadComponent: () => import('../components/membership/committees/committees.component') },
            { path: 'downloads', data: { title: 'Resource & Downloads' }, loadComponent: () => import('../components/membership/resources/resources.component') },

            { path: 'newsletters', data: { title: 'Newsletters' }, loadComponent: () => import('../components/newsletter/newsletter.component') },
            { path: 'contact', data: { title: 'Newsletters' }, loadComponent: () => import('../components/contact/contact.component') },
        ] 
    }
    // other routes here. E.g 404 page, maintenence or downtime notice
] as Route[]