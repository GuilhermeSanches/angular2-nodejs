import { provideRouter, RouterConfig } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";

export const routes: RouterConfig = [
    { path: "", component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];