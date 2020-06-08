import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monTitre = 'Gestion des naissances de Wookies !';
  // accès directement à travers le 'app-component.ts' pour 'app.component.html
  titreListeWookies = 'Liste des wookies 2 test';

  constructor(private logger: LoggerService) {
  }

  // prenoms: string[] = ["Chewie", 'Han'];

  /*maFunction(valeur: number) {
    console.log('Click ?', valeur);
  }*/

  maFonctionPourSavoirLeClick() {
    // console.log('A priori, ça fonctionne');
    // const logger = new LoggerService();
    this.logger.log('A priori, ça fonctionne');
  }
}
