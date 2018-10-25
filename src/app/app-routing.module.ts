import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListHeroComponent} from './app/list-hero/list-hero.component';
import {HerosComponent} from './app/heros/heros.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {VillainComponent} from './app/villain/villain.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'heroes', component: ListHeroComponent },
  { path: 'vilians', component: VillainComponent },
  { path: 'hero/:id', component: HerosComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
