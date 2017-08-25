import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tweet } from '../models/tweet';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService{

    constructor(private _http:Http){}

    getAllTweets(): Promise<any> {
        let tweets: Tweet[] = new Array();
        return new Promise(resolve => {
            this._http.get("http://localhost:4200/assets/mock-data/tweets.json")
            .map(res => res.json())
            .subscribe(data => {
                data.forEach(element => {
                    tweets.push(new Tweet(element.avatarUrl, element.accountFullName, element.twitterHandle,element.tweetText,element.tweetPhotoUrl));
                });
                resolve(tweets);
            })
        })
    }

}