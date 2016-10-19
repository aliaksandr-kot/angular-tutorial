import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {HeroDetailComponent} from "../component/hero-detail/hero-detail.component";

import {AppComponent} from '../component/app/app.component';
import {HeroesComponent} from "../component/heroes/heroes.component";
import {HeroService} from "../service/hero.service";
import {DashboardComponent} from "../component/dashboard/dashboard.component";
import {AppRoutingModule} from "../route/app-routing.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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