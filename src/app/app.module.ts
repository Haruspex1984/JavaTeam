import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BannerComponent } from './shared/components/banner/banner.component';
import { StagiairesAllComponent } from './stagiaires/stagiaires-all/stagiaires-all.component';
import { StagiairesOneComponent } from './stagiaires/stagiaires-one/stagiaires-one.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IndexComponent } from './stagiaires/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    StagiairesAllComponent,
    StagiairesOneComponent,
    IndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
