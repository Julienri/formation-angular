import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    this.log('LoggerService:: construction');
  }

  // obj? peut être nul, et le 'any' renvoie toute sorte d'objets
  log(message: string, obj?: any) {
    if (! environment.production) {
      console.log(message, obj);
    }
  }
}
