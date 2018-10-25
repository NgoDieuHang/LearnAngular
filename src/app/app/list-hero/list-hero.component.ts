import {Component, OnInit} from '@angular/core';
import {Hero} from '../entities/hero';
import {listHero} from '../data/heroes';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero: Hero[];
  selectHero: Hero;

  constructor(private heroSevice: HeroService) {

  }

  ngOnInit() {
    //this.listHero = this.heroSevice.getHero();
    this.heroSevice.getHero().subscribe(
      heroes => {
        this.listHero = heroes;
      },
      error1 => {
        console.log('error');
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectHero = this.heroSevice.getHeroById(hero.id);
  }
}
