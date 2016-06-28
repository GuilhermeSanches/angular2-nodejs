import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { ServiceHome } from "./home.service";
import { NameHome } from "./home.model";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `<div class="list-group" role="alert"> 
 <a href="#" *ngFor="let name of names" class="list-group-item">{{name.name}}</a>
    </div>`,
    providers: [ServiceHome]
})
export class HomeComponent {
    names: NameHome[];

    constructor(private serviceHome: ServiceHome) {
    }

    ngOnInit() {
        this.getNames();
    }
    getNames() {
        let that = this;

        this.serviceHome.getNames().subscribe(

            data => {  this.names = data; console.log(this.names) },
            err => console.error("erro"+err)
        );
    }
    
}