export class UpcomingGame {

    school: string;
    schoolVersus: string;
    location: string;
    time: string;
    date: string;
    sport: string;
    cssClass: string;
    gMapsSearch: string;

    constructor(school: string, schoolVersus: string, location: string, time: string, date: string, sport: string, cssClass: string, gMapsSearch: string) {
        this.school = school;
        this.schoolVersus = schoolVersus;
        this.location = location;
        this.time = time;
        this.date = date;
        this.sport = sport;
        this.cssClass = cssClass;
        this.gMapsSearch = gMapsSearch;
    }

}
