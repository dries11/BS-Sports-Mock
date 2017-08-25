import { Component, OnInit } from '@angular/core';
import { UpcomingGamesService } from '../../services/upcominggames.service';
import { UpcomingGame } from '../../models/upcominggame';

@Component({
    selector: 'app-upcoming-games',
    templateUrl: './upcoming-games.component.html',
    styleUrls: ['./upcoming-games.component.scss']
})
export class UpcomingGamesComponent implements OnInit{

    games: UpcomingGame[];

    constructor(private upcominggamesService:UpcomingGamesService){}

    ngOnInit(){
        this.upcominggamesService.getUpcomingGames().then(data => {
            this.games = data;
        });
    }
    
}