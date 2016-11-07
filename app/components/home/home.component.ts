import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { ServiceHome } from "./home.service";
import { NameHome } from "./home.model";

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './home.html',
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
            (data) => {
                that.names = data;
            },
            (err) => {
                console.error("erro" + err)
            }
        );
    }
}