import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { CounterComponent } from './counter/counter.component';
// import {AppCounterServices} from "./services/app-counter.services";

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        // AppCounterServices
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
