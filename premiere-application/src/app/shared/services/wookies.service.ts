import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MonWookie } from 'src/app/core/models/mon-wookie';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WookiesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MonWookie[]> {
    // const monTableau: MonWookie[] = [];
    // monTableau.push(new MonWookie(1, 'chewie', 230));
      // intercepter l'observable et renvoyer des choses avec le 'pipe', chainer des actions sur le pipe !! ==> renvoie un observable
    // return of(monTableau).pipe(delay(1000));
    // renvoyer le type pour l'httpclient
    return this.httpClient.get<MonWookie[]>(environment.apis.wookies.url);
  }
}
