import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from '../../models/tweet';
import { TweetComponent } from './tweet/tweet.component';

@Component({
    selector: 'app-twitter-feed',
    templateUrl: './twitter-feed.component.html',
    styleUrls: ['./twitter-feed.component.scss']
})
export class TwitterFeedComponent implements OnInit{

    tweets: Tweet[];

    constructor(private _tweetService:TweetService){}

    ngOnInit(){
        this._tweetService.getAllTweets().then(data => {
            this.tweets = data;
        });
    }

}