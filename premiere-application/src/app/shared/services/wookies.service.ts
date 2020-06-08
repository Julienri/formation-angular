import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MonWookie } from 'src/app/core/models/mon-wookie';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WookiesService {

  constructor() { }

  getAll(): Observable<MonWookie[]> {
    const monTableau: MonWookie[] = [];
    monTableau.push(new MonWookie(1, 'chewie', 230));
    // intercepter l'observable et renvoyer des choses avec le 'pipe', chainer des actions sur le pipe !! ==> renvoie un observable
    return of(monTableau).pipe(delay(1000));
  }
}
