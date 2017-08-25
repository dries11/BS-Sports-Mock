import { Component, OnInit } from '@angular/core';
import { SchoolService } from './services/school.service';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  schools: [any];

  constructor(private schoolService: SchoolService){}

  ngOnInit(){
    this.schoolService.getAllSchools().then(data => {
      this.schools = data;
    });
  }



}
