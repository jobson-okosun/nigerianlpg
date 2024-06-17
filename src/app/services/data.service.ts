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
}