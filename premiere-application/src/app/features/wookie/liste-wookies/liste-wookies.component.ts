import { Component, OnInit, Input } from '@angular/core';
import { MonWookie } from 'src/app/core/models/mon-wookie';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { WookiesService } from 'src/app/shared/services/wookies.service';

@Component({
  selector: 'app-liste-wookies',
  templateUrl: './liste-wookies.component.html',
  styleUrls: ['./liste-wookies.component.css']
})
export class ListeWookiesComponent implements OnInit {

  @Input()
  titre = '';
  wookies: MonWookie[] = [];

  constructor(private logger: LoggerService,
              private wookieService: WookiesService) {

    // this.wookies.push(new MonWookie(1, 'Chewie', 300), new MonWookie(2, 'Mooglie', 126), new MonWookie(3, 'Luke', 175));
    // this.wookies.push({id: 4, prenom: 'bijourl', taille: 270}); // WARNING, on ne passe pas par le constructeur
  }

  ngOnInit(): void {
    this.wookieService.getAll()
                      // subscribe : je veux savoir
                      .subscribe((tableauDeWookie) => this.wookies = tableauDeWookie);
  }

}
