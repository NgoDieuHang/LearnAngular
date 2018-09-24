import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/hero';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	hero: Hero;

  constructor() {
  this.hero= new Hero();
  this.hero.id=1;
  this.hero.name='Yu';
  this.hero.skills=['fly','run']; 
}

  ngOnInit() {
  }

}
