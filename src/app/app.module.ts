import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './app/heros/heros.component';
import {FormsModule} from '@angular/forms';
import { VillainComponent } from './app/villain/villain.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    VillainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
