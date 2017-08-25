import { Component, Input } from '@angular/core';
import { UpcomingGame } from '../../../models/upcominggame';

@Component({
    selector: 'app-upcoming-game-single',
    templateUrl: './upcoming-game-single.component.html',
    styleUrls: ['./upcoming-game-single.component.scss']
})
export class UpcomingGameSingleComponent{

    @Input('game') game: UpcomingGame;

    constructor() {}

}
