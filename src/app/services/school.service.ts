import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SchoolService{

    constructor(private _http: Http){

    }

    getAllSchools(): Promise<any> {
        return new Promise(resolve => {
            this._http.get("http://localhost:4200/assets/mock-data/schools.json")
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            });
        });
    }

}