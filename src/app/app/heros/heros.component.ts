import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../entities/hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../services/hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroSevice: HeroService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.heroSevice.getHeroById(id).subscribe(
      hero => {
        this.hero = hero;
      },
      error1 => {
        console.log('error');
      }
    );
  }

}
