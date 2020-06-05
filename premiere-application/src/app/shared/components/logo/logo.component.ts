import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  afficherLogo = false;
  titreBouton = 'cacher';

  constructor() { }

  ngOnInit(): void {
  }

  afficherImage() {
    this.titreBouton = 'cacher';
    this.afficherLogo = ! this.afficherLogo;

    if (! this.afficherLogo) {
      this.titreBouton = 'afficher';

    }
  }

}
