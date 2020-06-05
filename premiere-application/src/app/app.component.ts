import { Component } from '@angular/core';
import { MonWookie } from './core/models/mon-wookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monTitre = 'Gestion des naissances de Wookies';

  // prenoms: string[] = ["Chewie", 'Han'];

  /*maFunction(valeur: number) {
    console.log('Click ?', valeur);
  }*/
}
