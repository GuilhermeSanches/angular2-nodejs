import { Component } from "@angular/core";
import { User } from "./users.model";
import { ServiceUser } from "./users.service";

@Component({
    selector: 'users',
    template: `<div><ul><li *ngFor="let user in users"></li></ul></div>`,
    providers: [ServiceUser]
})

export class UsersComponent {
    users: User[];
    constructor(private serviceUsers : ServiceUser){
        this.getUsers();
    }

    getUsers(){
        this.serviceUsers.getUsers().subscribe(
            data=>{

            this.users = data;

            }
        );
    }
}