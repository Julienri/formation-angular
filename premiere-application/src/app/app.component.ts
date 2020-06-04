import { Component } from '@angular/core';
import { MonWookie } from './core/models/mon-wookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monTitre = 'Gestion des naissances de Wookies';
  afficherLogo = false;

  //prenoms: string[] = ["Chewie", 'Han'];

  wookies: MonWookie[] = [];

  constructor() {
    this.wookies.push(new MonWookie(1, 'Chewie', 300), new MonWookie(2, 'Mooglie', 126), new MonWookie(3, 'Luke', 175));
    this.wookies.push({id: 4, prenom: 'bijourl', taille: 270});
  }
}
