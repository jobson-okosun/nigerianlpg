import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export default class DataService { 

    private _http = inject(HttpClient)

    getNews():Observable<any> {
        return this._http.get('app/resource/mock/news.json')
    }

    getNewsMediaStreams():Observable<any> {
        return this._http.get('app/resource/mock/streams.json')
    }

    getPressRelease():Observable<any> {
        return this._http.get('app/resource/mock/press-release.json')
    }

    getDepotPrices():Observable<any> {
        return this._http.get('app/resource/mock/depot-prices.json')
    }

    getMembers():Observable<any> {
        return this._http.get('app/resource/mock/members.json')
    }

    getResourceDownloadables():Observable<any> {
        return this._http.get('app/resource/mock/resources.json')
    }

    getNewsletterBulletins():Observable<any> {
        return this._http.get('app/resource/mock/bulletin.json')
    }

    getEvents():Observable<any> {
        return this._http.get('app/resource/mock/events.json')
    }

    getPhotos():Observable<any> {
        return this._http.get('app/resource/mock/photos.json')
    }

    getEvent(title:string):Observable<any> {
        return this._http.get('https://www.api.nigerialpgas.com/api/displayeventbyslug/' + title)
    }

    getNewsPost(title:string):Observable<any> {
        return this._http.get('https://www.api.nigerialpgas.com/api/getnewsbyslug/' + title)
    }

    getPressPost(title:string):Observable<any> {
        return this._http.get('https://www.api.nigerialpgas.com/api/getnewsbyslug/' + title)
    }

    getConferences():Observable<any> {
        return this._http.get('app/resource/mock/conference.json')
    }

    getConference(title:string):Observable<any> {
        return this._http.get('https://www.api.nigerialpgas.com/api/getnewsbyslug/' + title)
    }
}