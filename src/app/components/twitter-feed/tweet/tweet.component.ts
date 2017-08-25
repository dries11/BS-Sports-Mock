import { Component, Input } from '@angular/core';
import { Tweet } from '../../../models/tweet';

@Component({
    selector: 'app-single-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

    @Input('tweet') tweet: Tweet;

    constructor(){}

}