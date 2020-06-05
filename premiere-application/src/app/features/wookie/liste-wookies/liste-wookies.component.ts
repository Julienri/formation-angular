import { Component, OnInit } from '@angular/core';
import { MonWookie } from 'src/app/core/models/mon-wookie';

@Component({
  selector: 'app-liste-wookies',
  templateUrl: './liste-wookies.component.html',
  styleUrls: ['./liste-wookies.component.css']
})
export class ListeWookiesComponent implements OnInit {

  wookies: MonWookie[] = [];

  constructor() {

    this.wookies.push(new MonWookie(1, 'Chewie', 300), new MonWookie(2, 'Mooglie', 126), new MonWookie(3, 'Luke', 175));
    this.wookies.push({id: 4, prenom: 'bijourl', taille: 270}); // WARNING, on ne passe pas par le constructeur
  }

  ngOnInit(): void {
  }

}
