import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UpcomingGame } from '../models/upcominggame';

@Injectable()
export class UpcomingGamesService {

    constructor(private _http: Http) {}

    getUpcomingGames(): Promise<UpcomingGame[]> {
        const games: UpcomingGame[] = new Array();
        return new Promise(resolve => {
            this._http.get('/assets/mock-data/upcoming-games.json')
            .map(res => res.json())
            .subscribe(data => {
                data.forEach(element => {
                    games.push(new UpcomingGame(element.school, element.schoolVersus, element.location, element.time, element.date, element.sport, element.cssClass, element.gMapsSearch));
                });
                resolve(games);
            });
        });
    }

}
