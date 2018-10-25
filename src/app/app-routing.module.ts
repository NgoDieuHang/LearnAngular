import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListHeroComponent} from './app/list-hero/list-hero.component';
const routes: Routes = [
  { path: 'heroes', component: ListHeroComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
