import {Injectable} from '@angular/core';
import {Hero} from '../entities/hero';
import {listHero} from '../data/heroes';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHero(): Observable<Hero[]> {
    this.messageService.addMessage('Load data success');
    return of(listHero);
  }

  getHeroById(id: number): Observable<Hero> {
    this.messageService.addMessage('You load data of heroes have' + id);
    return of(listHero.find(
      function (element) {
        return element.id === id;
      }
    ));
  }
}
