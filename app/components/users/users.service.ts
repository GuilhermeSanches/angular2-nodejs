import { Injectable} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class ServiceUser{
    constructor(private http : Http){}
   private usersUrl = 'home/users';
    getUsers(){
      return  this.http.get(this.usersUrl).map(res=>res.json());
    }

}
