import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes/app.routes";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]).catch(err => console.error(err));