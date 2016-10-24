import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "../route/app-routing.module";

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../mock/in-memory-data.service";

import {AppComponent} from '../component/app/app.component';
import {DashboardComponent} from "../component/dashboard/dashboard.component";
import {HeroesComponent} from "../component/heroes/heroes.component";
import {HeroDetailComponent} from "../component/hero-detail/hero-detail.component";
import {HeroService} from "../service/hero.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {

}