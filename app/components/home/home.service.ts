import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { NameHome } from "./home.model";


@Injectable()
export class ServiceHome {
    private namesUrl = 'home/names';
    constructor(private http: Http) { }

    getNames(): Observable<NameHome[]> {
        return this.http
            .get(this.namesUrl).map(this.extractData);
    }

    private extractData(res: Response) {
        console.log(res.text());
        return res.json() || [];
    }
}