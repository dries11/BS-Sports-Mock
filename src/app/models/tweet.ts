export class Tweet{

    avatarUrl: string;
    accountFullName: string;
    twitterHandle: string;
    tweetText: string;
    tweetPhotoUrl: string;

    constructor(avatarUrl: string, accountFullName:string, twitterHandle: string, tweetText: string, tweetPhotoUrl: string){
        this.avatarUrl = avatarUrl;
        this.accountFullName = accountFullName;
        this.twitterHandle = twitterHandle;
        this.tweetText = tweetText;
        this.tweetPhotoUrl = tweetPhotoUrl;
    }

}