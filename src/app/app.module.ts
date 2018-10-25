import {BrowserModule} from '@angular/platform-browser';


import {HerosComponent} from './app/heros/heros.component';
import {FormsModule} from '@angular/forms';
import {VillainComponent} from './app/villain/villain.component';
import {ListHeroComponent} from './app/list-hero/list-hero.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {MessageComponent} from './app/message/message.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule
({
  declarations: [
    AppComponent,
    HerosComponent,
    VillainComponent,
    ListHeroComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
