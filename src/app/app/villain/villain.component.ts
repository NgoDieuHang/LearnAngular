import {Component, OnInit} from '@angular/core';
import {Villain} from '../entities/villain';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent {

  villain: Villain;

  constructor() {
    this.villain = new Villain();
    this.villain.id = 1;
    this.villain.name = 'Yumi';
    this.villain.skills = ['fly', 'run'];
  }


}
