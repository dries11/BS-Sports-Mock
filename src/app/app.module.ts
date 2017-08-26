import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpcomingGamesComponent } from './components/upcoming-games/upcoming-games.component';
import { UpcomingGameSingleComponent } from './components/upcoming-games/upcoming-game-single/upcoming-game-single.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { TweetComponent } from './components/twitter-feed/tweet/tweet.component';
import { SlideShowComponent } from './components/slide-show/slideshow.component';

import { SchoolService } from './services/school.service';
import { TweetService } from './services/tweet.service';
import { UpcomingGamesService } from './services/upcominggames.service';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent,
    TweetComponent,
    DashboardComponent,
    UpcomingGamesComponent,
    UpcomingGameSingleComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SchoolService, TweetService, UpcomingGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
